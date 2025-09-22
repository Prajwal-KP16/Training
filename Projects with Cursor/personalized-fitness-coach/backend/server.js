const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(express.json());

app.get('/api/health',(req,res)=>res.json({status:'ok'}));

// Basic plan generator route
app.post('/api/plan',(req,res)=>{
  const { goal = 'general fitness', experience = 'beginner', daysPerWeek = 3, preferences = '' } = req.body || {};

  const days = Math.max(1, Math.min(7, Number(daysPerWeek) || 3));

  const focusMap = {
    'weight loss': ['Full Body HIIT','Lower Body + Core','Upper Body + Cardio','Mobility + LISS'],
    'muscle gain': ['Push (Chest/Shoulders/Triceps)','Pull (Back/Biceps)','Legs + Core','Upper Body Accessories'],
    'endurance': ['Tempo Run/Cycle','Intervals + Core','Long LISS','Recovery + Mobility'],
    'general fitness': ['Full Body Strength','Cardio + Core','Mobility/Active Recovery','Full Body Circuit']
  };

  const templates = focusMap[goal?.toLowerCase?.()] || focusMap['general fitness'];

  const planDays = Array.from({length: days}).map((_, i) => ({
    day: `Day ${i+1}`,
    focus: templates[i % templates.length],
    blocks: [
      `${experience === 'beginner' ? 3 : experience === 'intermediate' ? 4 : 5} x compound movements`,
      'Accessory work x 2-3',
      preferences ? `Preference: ${preferences}` : 'Core/Finisher 8-12 min'
    ],
    notes: goal === 'weight loss' ? 'Keep rests short (45-75s).' : goal === 'endurance' ? 'Nasal breathing where possible.' : 'Progress load or reps weekly.'
  }));

  const tips = [
    'Warm up 5-10 min before each session.',
    'Aim for 7-9k steps on non-training days.',
    'Protein target: ~1.6-2.2 g/kg bodyweight.',
    'Sleep 7-9 hours; keep consistent schedule.'
  ];

  res.json({ goal, experience, daysPerWeek: days, plan: planDays, tips });
});

// Debug: list routes
app.get('/api/routes', (req, res) => {
  const routes = [];
  app._router.stack.forEach((m) => {
    if (m.route && m.route.path) {
      const methods = Object.keys(m.route.methods).map(k=>k.toUpperCase());
      routes.push({ path: m.route.path, methods });
    }
  });
  res.json({ routes });
});

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log('Server running on '+PORT));

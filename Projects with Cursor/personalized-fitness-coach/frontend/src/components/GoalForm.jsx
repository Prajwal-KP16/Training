export default function GoalForm({ onSubmit, loading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      goal: form.get('goal') || 'general fitness',
      experience: form.get('experience') || 'beginner',
      daysPerWeek: Number(form.get('daysPerWeek') || 3),
      preferences: form.get('preferences') || ''
    };
    onSubmit?.(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2 bg-white/5 p-4 rounded-lg border border-white/10">
      <div className="flex flex-col gap-1">
        <label className="text-sm">Goal</label>
        <select name="goal" className="bg-transparent border border-white/20 rounded px-3 py-2">
          <option value="weight loss">Weight Loss</option>
          <option className="text-black" value="muscle gain">Muscle Gain</option>
          <option className="text-black" value="endurance">Endurance</option>
          <option className="text-black" value="general fitness">General Fitness</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm">Experience</label>
        <select name="experience" className="bg-transparent border border-white/20 rounded px-3 py-2">
          <option className="text-black" value="beginner">Beginner</option>
          <option className="text-black" value="intermediate">Intermediate</option>
          <option className="text-black" value="advanced">Advanced</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm">Days per week</label>
        <input name="daysPerWeek" type="number" min={1} max={7} defaultValue={3} className="bg-transparent border border-white/20 rounded px-3 py-2" />
      </div>
      <div className="flex flex-col gap-1 sm:col-span-2">
        <label className="text-sm">Preferences (equipment, injuries, likes)</label>
        <input name="preferences" type="text" placeholder="e.g. dumbbells only, bad knees" className="bg-transparent border border-white/20 rounded px-3 py-2" />
      </div>
      <div className="sm:col-span-2">
        <button disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 rounded px-4 py-2 font-medium">
          {loading ? 'Generating...' : 'Generate Plan'}
        </button>
      </div>
    </form>
  );
}

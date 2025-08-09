import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Principles from './pages/Principles'
import BareMinimum from './pages/BareMinimum'
import Situations from './pages/Situations'
import Resources from './pages/Resources'
import Thoughts from './pages/Thoughts'
import QnA from './pages/QnA'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/bare-minimum" element={<BareMinimum />} />
          <Route path="/situations" element={<Situations />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/qna" element={<QnA />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

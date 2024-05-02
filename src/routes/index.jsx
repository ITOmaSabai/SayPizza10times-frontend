import { Route, Routes } from 'react-router-dom';
import { HeroLayout } from '../components/layouts/HeroLayout';
import { GameLayout } from '../components/layouts/GameLayout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HeroLayout />} />
        <Route path="/game" element={<GameLayout />} />
      </Route>
    </Routes>
  )
}
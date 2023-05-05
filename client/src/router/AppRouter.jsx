import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../scenes/dashboard/Dashboard'
import { Layout } from '../scenes/layout/Layout'

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Navigate to='/dashboard' replace />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

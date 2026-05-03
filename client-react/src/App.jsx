import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import AuthPage from './pages/auth/AuthPage';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Placeholder components for your pages
const Dashboard = () => <div className="p-8"><h1 className="text-3xl font-bold">Dashboard</h1></div>;
const NotFound = () => <div className="p-8"><h1 className="text-2xl font-bold">Page Not Found</h1></div>;

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default function App() {
    const { isAuthenticated } = useAuth();

    return (
        <Router>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <AuthPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

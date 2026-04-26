class ApiService {
    static getHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AuthService.getToken()}`
        };
    }

    static async request(method, path, body = null) {
    }

    // ── Workspaces ──
    static getWorkspaces() { return this.request('GET', '/api/workspaces'); }
    static createWorkspace(data) { return this.request('POST', '/api/workspaces', data); }
    static getWorkspace(id) { return this.request('GET', `/api/workspaces/${id}`); }

    // ── Projects ──
    static getProjects(workspaceId) { return this.request('GET', `/api/workspaces/${workspaceId}/projects`); }
    static createProject(workspaceId, data) { return this.request('POST', `/api/workspaces/${workspaceId}/projects`, data); }
    static getProject(id) { return this.request('GET', `/api/projects/${id}`); }
    static updateProject(id, data) { return this.request('PUT', `/api/projects/${id}`, data); }
    static deleteProject(id) { return this.request('DELETE', `/api/projects/${id}`); }

    // ── Tasks ──
    static getTasks(projectId) { return this.request('GET', `/api/projects/${projectId}/tasks`); }
    static createTask(projectId, data) { return this.request('POST', `/api/projects/${projectId}/tasks`, data); }
    static getTask(id) { return this.request('GET', `/api/tasks/${id}`); }
    static updateTask(id, data) { return this.request('PUT', `/api/tasks/${id}`, data); }
    static deleteTask(id) { return this.request('DELETE', `/api/tasks/${id}`); }
    static updateTaskStatus(id, status) { return this.request('PATCH', `/api/tasks/${id}/status`, { status }); }

    // ── Comments ──
    static getComments(taskId) { return this.request('GET', `/api/tasks/${taskId}/comments`); }
    static createComment(taskId, content) { return this.request('POST', `/api/tasks/${taskId}/comments`, { content }); }
    static deleteComment(id) { return this.request('DELETE', `/api/comments/${id}`); }

    // ── Members ──
    static getProjectMembers(projectId) { return this.request('GET', `/api/projects/${projectId}/members`); }
    static getWorkspaceMembers(workspaceId) { return this.request('GET', `/api/workspaces/${workspaceId}/members`); }

    // ── Notifications ──
    static getNotifications() { return this.request('GET', '/api/notifications'); }
    static markNotificationRead(id) { return this.request('PATCH', `/api/notifications/${id}/read`); }
    static markAllRead() { return this.request('PATCH', '/api/notifications/read-all'); }

    // ── Labels ──
    static getLabels(projectId) { return this.request('GET', `/api/projects/${projectId}/labels`); }
    static createLabel(projectId, data) { return this.request('POST', `/api/projects/${projectId}/labels`, data); }
}
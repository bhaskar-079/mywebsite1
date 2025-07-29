
        // Data Management System
        class DataManager {
            constructor() {
                this.initializeData();
            }

            initializeData() {
                // Initialize with sample data if not exists
                if (!localStorage.getItem('cims_departments')) {
                    const sampleDepartments = [
                        { id: 1, name: 'Administration Building', description: 'Main administrative offices, registrar, financial aid', building: 'Building A - Ground Floor', contact: 'admin@university.edu' },
                        { id: 2, name: 'Science Complex', description: 'Physics, Chemistry, Biology laboratories and classrooms', building: 'Building S - All Floors', contact: 'science@university.edu' },
                        { id: 3, name: 'Engineering Building', description: 'Computer Science, Mechanical, Electrical Engineering', building: 'Building E - Floors 1-4', contact: 'engineering@university.edu' },
                        { id: 4, name: 'Library', description: 'Central library, study areas, computer labs', building: 'Building L - All Floors', contact: 'library@university.edu' },
                        { id: 5, name: 'Student Center', description: 'Cafeteria, bookstore, student services', building: 'Building SC - Floors 1-3', contact: 'student@university.edu' },
                        { id: 6, name: 'Athletic Center', description: 'Gymnasium, fitness center, sports facilities', building: 'Building AC - All Areas', contact: 'athletics@university.edu' }
                    ];
                    localStorage.setItem('cims_departments', JSON.stringify(sampleDepartments));
                }

                if (!localStorage.getItem('cims_faculty')) {
                    const sampleFaculty = [
                        { id: 1, name: 'Dr. Sarah Johnson', title: 'Professor', department: 'Science Complex', email: 'sjohnson@university.edu', phone: '(555) 123-4567', office: 'S-201' },
                        { id: 2, name: 'Prof. Michael Chen', title: 'Associate Professor', department: 'Engineering Building', email: 'mchen@university.edu', phone: '(555) 234-5678', office: 'E-305' },
                        { id: 3, name: 'Dr. Emily Rodriguez', title: 'Department Head', department: 'Library', email: 'erodriguez@university.edu', phone: '(555) 345-6789', office: 'L-100' },
                        { id: 4, name: 'Prof. David Kim', title: 'Assistant Professor', department: 'Science Complex', email: 'dkim@university.edu', phone: '(555) 456-7890', office: 'S-150' }
                    ];
                    localStorage.setItem('cims_faculty', JSON.stringify(sampleFaculty));
                }

                if (!localStorage.getItem('cims_courses')) {
                    const sampleCourses = [
                        { id: 1, code: 'CS101', name: 'Introduction to Computer Science', department: 'Engineering Building', credits: 3, instructor: 'Prof. Michael Chen', schedule: 'MWF 10:00-11:00' },
                        { id: 2, code: 'PHYS201', name: 'General Physics I', department: 'Science Complex', credits: 4, instructor: 'Dr. Sarah Johnson', schedule: 'TTh 2:00-4:00' },
                        { id: 3, code: 'CHEM101', name: 'General Chemistry', department: 'Science Complex', credits: 3, instructor: 'Dr. David Kim', schedule: 'MWF 9:00-10:00' },
                        { id: 4, code: 'ENG102', name: 'English Composition', department: 'Library', credits: 3, instructor: 'Dr. Emily Rodriguez', schedule: 'TTh 1:00-2:30' }
                    ];
                    localStorage.setItem('cims_courses', JSON.stringify(sampleCourses));
                }

                if (!localStorage.getItem('cims_announcements')) {
                    const sampleAnnouncements = [
                        { id: 1, title: 'Fall Semester Registration', content: 'Registration for fall semester begins Monday, March 15th. Please check with your advisor.', priority: 'high', audience: 'students', date: new Date().toISOString() },
                        { id: 2, title: 'Campus WiFi Maintenance', content: 'Campus WiFi will be down for maintenance on Saturday from 2-4 AM.', priority: 'medium', audience: 'all', date: new Date().toISOString() },
                        { id: 3, title: 'Faculty Meeting', content: 'Monthly faculty meeting scheduled for Friday at 3 PM in Conference Room A.', priority: 'medium', audience: 'faculty', date: new Date().toISOString() }
                    ];
                    localStorage.setItem('cims_announcements', JSON.stringify(sampleAnnouncements));
                }

                if (!localStorage.getItem('cims_resources')) {
                    const sampleResources = [
                        { id: 1, name: 'Campus Map', description: 'Interactive campus map with building locations', category: 'maps', fileUrl: '#', size: '2.1 MB' },
                        { id: 2, name: 'Student Handbook', description: 'Complete guide for new students', category: 'guides', fileUrl: '#', size: '5.3 MB' },
                        { id: 3, name: 'Course Registration Form', description: 'Form for course registration', category: 'forms', fileUrl: '#', size: '156 KB' },
                        { id: 4, name: 'Academic Calendar', description: 'Important dates and deadlines', category: 'academic', fileUrl: '#', size: '892 KB' }
                    ];
                    localStorage.setItem('cims_resources', JSON.stringify(sampleResources));
                }

                if (!localStorage.getItem('cims_users')) {
                    const sampleUsers = [
                        { id: 1, username: 'admin', fullName: 'System Administrator', email: 'admin@university.edu', role: 'admin', password: 'admin123', active: true },
                        { id: 2, username: 'faculty', fullName: 'Faculty User', email: 'faculty@university.edu', role: 'faculty', password: 'faculty123', active: true },
                        { id: 3, username: 'student', fullName: 'Student User', email: 'student@university.edu', role: 'student', password: 'student123', active: true },
                        { id: 4, username: 'itsupport', fullName: 'IT Support', email: 'it@university.edu', role: 'it', password: 'it123', active: true }
                    ];
                    localStorage.setItem('cims_users', JSON.stringify(sampleUsers));
                }

                if (!localStorage.getItem('cims_buildings')) {
                    const sampleBuildings = [
                        { id: 1, name: 'Administration Building', code: 'A', description: 'Main administrative offices, registrar, financial aid', location: 'Ground Floor' },
                        { id: 2, name: 'Science Complex', code: 'S', description: 'Physics, Chemistry, Biology laboratories and classrooms', location: 'All Floors' },
                        { id: 3, name: 'Engineering Building', code: 'E', description: 'Computer Science, Mechanical, Electrical Engineering', location: 'Floors 1-4' },
                        { id: 4, name: 'Library', code: 'L', description: 'Central library, study areas, computer labs', location: 'All Floors' },
                        { id: 5, name: 'Student Center', code: 'SC', description: 'Cafeteria, bookstore, student services', location: 'Floors 1-3' },
                        { id: 6, name: 'Athletic Center', code: 'AC', description: 'Gymnasium, fitness center, sports facilities', location: 'All Areas' }
                    ];
                    localStorage.setItem('cims_buildings', JSON.stringify(sampleBuildings));
                }
            }

            // Generic CRUD operations
            getAll(entity) {
                return JSON.parse(localStorage.getItem(`cims_${entity}`) || '[]');
            }

            getById(entity, id) {
                const items = this.getAll(entity);
                return items.find(item => item.id === parseInt(id));
            }

            create(entity, data) {
                const items = this.getAll(entity);
                const newId = Math.max(0, ...items.map(item => item.id)) + 1;
                const newItem = { ...data, id: newId };
                items.push(newItem);
                localStorage.setItem(`cims_${entity}`, JSON.stringify(items));
                return newItem;
            }

            update(entity, id, data) {
                const items = this.getAll(entity);
                const index = items.findIndex(item => item.id === parseInt(id));
                if (index !== -1) {
                    items[index] = { ...items[index], ...data };
                    localStorage.setItem(`cims_${entity}`, JSON.stringify(items));
                    return items[index];
                }
                return null;
            }

            delete(entity, id) {
                const items = this.getAll(entity);
                const filteredItems = items.filter(item => item.id !== parseInt(id));
                localStorage.setItem(`cims_${entity}`, JSON.stringify(filteredItems));
                return true;
            }

            search(entity, query) {
                const items = this.getAll(entity);
                return items.filter(item => 
                    Object.values(item).some(value => 
                        value.toString().toLowerCase().includes(query.toLowerCase())
                    )
                );
            }
        }

        // Authentication System
        class AuthManager {
            constructor() {
                this.currentUser = this.getCurrentUser();
            }

            login(username, password, role) {
                const dataManager = new DataManager();
                const users = dataManager.getAll('users');
                const user = users.find(u => u.username === username && u.password === password && u.role === role);
                
                if (user) {
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUser = user;
                    return user;
                }
                return null;
            }

            logout() {
                sessionStorage.removeItem('currentUser');
                this.currentUser = null;
            }

            getCurrentUser() {
                const userData = sessionStorage.getItem('currentUser');
                return userData ? JSON.parse(userData) : null;
            }

            isLoggedIn() {
                return this.currentUser !== null;
            }

            hasRole(role) {
                return this.currentUser && this.currentUser.role === role;
            }

            canAccess(requiredRoles) {
                if (!this.currentUser) return false;
                return requiredRoles.includes(this.currentUser.role);
            }
        }

        // UI Manager
        class UIManager {
            constructor() {
                this.dataManager = new DataManager();
                this.authManager = new AuthManager();
                this.currentTab = 'dashboard';
                this.init();
            }

            init() {
                this.setupEventListeners();
                this.updateUI();
                this.loadDashboard();
            }

            setupEventListeners() {
                // Navigation
                document.querySelectorAll('.sidebar-item').forEach(item => {
                    item.addEventListener('click', (e) => {
                        const tab = e.currentTarget.dataset.tab;
                        if (tab) {
                            this.switchTab(tab);
                        }
                    });
                });

                // Login/Logout
                document.getElementById('loginBtn').addEventListener('click', () => {
                    document.getElementById('loginModal').classList.add('active');
                });

                document.getElementById('logoutBtn').addEventListener('click', () => {
                    this.authManager.logout();
                    this.updateUI();
                    this.switchTab('dashboard');
                });

                // Modal close buttons
                document.querySelectorAll('[id$="Modal"] [id^="close"]').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const modal = e.target.closest('.modal');
                        modal.classList.remove('active');
                    });
                });

                // Login form
                document.getElementById('loginForm').addEventListener('submit', (e) => {
                    e.preventDefault();
                    const username = document.getElementById('username').value;
                    const password = document.getElementById('password').value;
                    const role = document.getElementById('role').value;
                    
                    const user = this.authManager.login(username, password, role);
                    if (user) {
                        document.getElementById('loginModal').classList.remove('active');
                        this.updateUI();
                        this.loadDashboard();
                        document.getElementById('loginForm').reset();
                    } else {
                        alert('Invalid credentials');
                    }
                });

                // Add buttons
                document.getElementById('addDeptBtn').addEventListener('click', () => this.openDepartmentModal());
                document.getElementById('addFacultyBtn').addEventListener('click', () => this.openFacultyModal());
                document.getElementById('addCourseBtn').addEventListener('click', () => this.openCourseModal());
                document.getElementById('addAnnouncementBtn').addEventListener('click', () => this.openAnnouncementModal());
                document.getElementById('addResourceBtn').addEventListener('click', () => this.openResourceModal());
                document.getElementById('addUserBtn').addEventListener('click', () => this.openUserModal());

                // Forms
                document.getElementById('departmentForm').addEventListener('submit', (e) => this.handleDepartmentSubmit(e));
                document.getElementById('facultyForm').addEventListener('submit', (e) => this.handleFacultySubmit(e));
                document.getElementById('courseForm').addEventListener('submit', (e) => this.handleCourseSubmit(e));
                document.getElementById('announcementForm').addEventListener('submit', (e) => this.handleAnnouncementSubmit(e));
                document.getElementById('resourceForm').addEventListener('submit', (e) => this.handleResourceSubmit(e));
                document.getElementById('userForm').addEventListener('submit', (e) => this.handleUserSubmit(e));

                // Search functionality
                document.getElementById('globalSearch').addEventListener('input', (e) => {
                    this.performGlobalSearch(e.target.value);
                });

                // Entity-specific search
                document.getElementById('deptSearch').addEventListener('input', (e) => {
                    this.loadDepartments(e.target.value);
                });

                document.getElementById('facultySearch').addEventListener('input', (e) => {
                    this.loadFaculty(e.target.value);
                });

                document.getElementById('courseSearch').addEventListener('input', (e) => {
                    this.loadCourses(e.target.value);
                });

                document.getElementById('resourceSearch').addEventListener('input', (e) => {
                    this.loadResources(e.target.value);
                });

                document.getElementById('userSearch').addEventListener('input', (e) => {
                    this.loadUsers(e.target.value);
                });

                // Export data
                document.getElementById('exportDataBtn').addEventListener('click', () => {
                    this.exportData();
                });

                // Cancel buttons
                document.querySelectorAll('[id^="cancel"]').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const modal = e.target.closest('.modal');
                        modal.classList.remove('active');
                    });
                });
            }

            updateUI() {
                const user = this.authManager.getCurrentUser();
                
                if (user) {
                    document.getElementById('userInfo').textContent = `Welcome, ${user.fullName} (${user.role})`;
                    document.getElementById('loginBtn').classList.add('hidden');
                    document.getElementById('logoutBtn').classList.remove('hidden');
                    
                    // Show admin menu if admin
                    if (user.role === 'admin' || user.role === 'it') {
                        document.getElementById('adminMenu').classList.remove('hidden');
                    } else {
                        document.getElementById('adminMenu').classList.add('hidden');
                    }
                } else {
                    document.getElementById('userInfo').textContent = 'Guest User';
                    document.getElementById('loginBtn').classList.remove('hidden');
                    document.getElementById('logoutBtn').classList.add('hidden');
                    document.getElementById('adminMenu').classList.add('hidden');
                }

                // Update add buttons visibility
                const canEdit = user && (user.role === 'admin' || user.role === 'it');
                document.querySelectorAll('[id^="add"][id$="Btn"]').forEach(btn => {
                    btn.style.display = canEdit ? 'block' : 'none';
                });
            }

            switchTab(tabName) {
                // Update active tab
                document.querySelectorAll('.sidebar-item').forEach(item => {
                    item.classList.remove('active-tab');
                });
                document.querySelector(`[data-tab="${tabName}"]`).classList.add('active-tab');

                // Hide all tab contents
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.add('hidden');
                });

                // Show selected tab
                document.getElementById(`tab-${tabName}`).classList.remove('hidden');
                this.currentTab = tabName;

                // Load tab content
                this.loadTabContent(tabName);
            }

            loadTabContent(tabName) {
                switch(tabName) {
                    case 'dashboard':
                        this.loadDashboard();
                        break;
                    case 'departments':
                        this.loadDepartments();
                        break;
                    case 'faculty':
                        this.loadFaculty();
                        this.populateFacultyFilters();
                        break;
                    case 'courses':
                        this.loadCourses();
                        this.populateCourseFilters();
                        break;
                    case 'announcements':
                        this.loadAnnouncements();
                        break;
                    case 'maps':
                        this.loadMaps();
                        break;
                    case 'resources':
                        this.loadResources();
                        break;
                    case 'users':
                        this.loadUsers();
                        break;
                    case 'analytics':
                        this.loadAnalytics();
                        break;
                    case 'settings':
                        this.loadSettings();
                        break;
                }
            }

            // Dashboard methods
            loadDashboard() {
                const departments = this.dataManager.getAll('departments');
                const faculty = this.dataManager.getAll('faculty');
                const courses = this.dataManager.getAll('courses');
                const announcements = this.dataManager.getAll('announcements');

                document.getElementById('deptCount').textContent = departments.length;
                document.getElementById('facultyCount').textContent = faculty.length;
                document.getElementById('courseCount').textContent = courses.length;
                document.getElementById('announcementCount').textContent = announcements.length;

                // Recent announcements
                const recentAnnouncements = announcements
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, 3);

                const recentAnnouncementsHtml = recentAnnouncements.map(ann => `
                    <div class="p-3 border-l-4 ${this.getPriorityColor(ann.priority)} bg-gray-50 rounded-r">
                        <h4 class="font-semibold text-sm">${ann.title}</h4>
                        <p class="text-xs text-gray-600 mt-1">${ann.content.substring(0, 100)}...</p>
                        <p class="text-xs text-gray-500 mt-2">${new Date(ann.date).toLocaleDateString()}</p>
                    </div>
                `).join('');

                document.getElementById('recentAnnouncements').innerHTML = recentAnnouncementsHtml;
            }

            getPriorityColor(priority) {
                const colors = {
                    low: 'border-green-500',
                    medium: 'border-yellow-500',
                    high: 'border-orange-500',
                    urgent: 'border-red-500'
                };
                return colors[priority] || 'border-gray-500';
            }

            // Department methods
            loadDepartments(searchQuery = '') {
                let departments = this.dataManager.getAll('departments');
                
                if (searchQuery) {
                    departments = departments.filter(dept => 
                        dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        dept.description.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                }

                const canEdit = this.authManager.getCurrentUser() && 
                               (this.authManager.hasRole('admin') || this.authManager.hasRole('it'));

                const html = departments.map(dept => `
                    <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold text-gray-900">${dept.name}</h3>
                                <p class="text-gray-600 mt-1">${dept.description}</p>
                                <div class="mt-2 space-y-1">
                                    <p class="text-sm text-gray-500">
                                        <i class="fas fa-map-marker-alt mr-2"></i>${dept.building}
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        <i class="fas fa-envelope mr-2"></i>${dept.contact}
                                    </p>
                                </div>
                            </div>
                            ${canEdit ? `
                                <div class="flex space-x-2 ml-4">
                                    <button onclick="uiManager.editDepartment(${dept.id})" 
                                            class="text-blue-600 hover:text-blue-800">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button onclick="uiManager.deleteDepartment(${dept.id})" 
                                            class="text-red-600 hover:text-red-800">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('');

                document.getElementById('departmentsList').innerHTML = html || '<p class="text-gray-500 text-center py-8">No departments found.</p>';
            }

            openDepartmentModal(id = null) {
                const modal = document.getElementById('departmentModal');
                const form = document.getElementById('departmentForm');
                
                if (id) {
                    const dept = this.dataManager.getById('departments', id);
                    document.getElementById('deptModalTitle').textContent = 'Edit Department';
                    document.getElementById('deptId').value = dept.id;
                    document.getElementById('deptName').value = dept.name;
                    document.getElementById('deptDescription').value = dept.description;
                    document.getElementById('deptBuilding').value = dept.building;
                    document.getElementById('deptContact').value = dept.contact;
                } else {
                    document.getElementById('deptModalTitle').textContent = 'Add Department';
                    form.reset();
                    document.getElementById('deptId').value = '';
                }
                
                modal.classList.add('active');
            }

            handleDepartmentSubmit(e) {
                e.preventDefault();
                const id = document.getElementById('deptId').value;
                const data = {
                    name: document.getElementById('deptName').value,
                    description: document.getElementById('deptDescription').value,
                    building: document.getElementById('deptBuilding').value,
                    contact: document.getElementById('deptContact').value
                };

                if (id) {
                    this.dataManager.update('departments', id, data);
                } else {
                    this.dataManager.create('departments', data);
                }

                document.getElementById('departmentModal').classList.remove('active');
                this.loadDepartments();
                this.loadDashboard();
            }

            editDepartment(id) {
                this.openDepartmentModal(id);
            }

            deleteDepartment(id) {
                if (confirm('Are you sure you want to delete this department?')) {
                    this.dataManager.delete('departments', id);
                    this.loadDepartments();
                    this.loadDashboard();
                }
            }

            // Faculty methods
            loadFaculty(searchQuery = '') {
                let faculty = this.dataManager.getAll('faculty');
                const filterDept = document.getElementById('facultyFilter').value;
                
                if (searchQuery) {
                    faculty = faculty.filter(f => 
                        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        f.department.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                }

                if (filterDept) {
                    faculty = faculty.filter(f => f.department === filterDept);
                }

                const canEdit = this.authManager.getCurrentUser() && 
                               (this.authManager.hasRole('admin') || this.authManager.hasRole('it'));

                const html = faculty.map(f => `
                    <div class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold text-gray-900">${f.name}</h3>
                                <p class="text-gray-600">${f.title}</p>
                                <p class="text-sm text-gray-500 mt-1">${f.department}</p>
                                <div class="mt-2 space-y-1">
                                    <p class="text-sm text-gray-500">
                                        <i class="fas fa-envelope mr-2"></i>${f.email}
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        <i class="fas fa-phone mr-2"></i>${f.phone}
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        <i class="fas fa-door-open mr-2"></i>${f.office}
                                    </p>
                                </div>
                            </div>
                            ${canEdit ? `
                                <div class="flex space-x-2 ml-4">
                                    <button onclick="uiManager.editFaculty(${f.id})" 
                                            class="text-green-600 hover:text-green-800">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button onclick="uiManager.deleteFaculty(${f.id})" 
                                            class="text-red-600 hover:text-red-800">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('');

                document.getElementById('facultyList').innerHTML = html || '<p class="text-gray-500 text-center py-8 col-span-full">No faculty found.</p>';
            }

            populateFacultyFilters() {
                const departments = this.dataManager.getAll('departments');
                const select = document.getElementById('facultyFilter');
                const currentValue = select.value;
                
                select.innerHTML = '<option value="">All Departments</option>' +
                    departments.map(dept => `<option value="${dept.name}">${dept.name}</option>`).join('');
                
                select.value = currentValue;
                
                select.addEventListener('change', () => {
                    this.loadFaculty(document.getElementById('facultySearch').value);
                });
            }

            openFacultyModal(id = null) {
                const modal = document.getElementById('facultyModal');
                const form = document.getElementById('facultyForm');
                const deptSelect = document.getElementById('facultyDepartment');
                
                // Populate departments
                const departments = this.dataManager.getAll('departments');
                deptSelect.innerHTML = departments.map(dept => 
                    `<option value="${dept.name}">${dept.name}</option>`
                ).join('');
                
                if (id) {
                    const faculty = this.dataManager.getById('faculty', id);
                    document.getElementById('facultyModalTitle').textContent = 'Edit Faculty';
                    document.getElementById('facultyId').value = faculty.id;
                    document.getElementById('facultyName').value = faculty.name;
                    document.getElementById('facultyTitle').value = faculty.title;
                    document.getElementById('facultyDepartment').value = faculty.department;
                    document.getElementById('facultyEmail').value = faculty.email;
                    document.getElementById('facultyPhone').value = faculty.phone;
                    document.getElementById('facultyOffice').value = faculty.office;
                } else {
                    document.getElementById('facultyModalTitle').textContent = 'Add Faculty';
                    form.reset();
                    document.getElementById('facultyId').value = '';
                }
                
                modal.classList.add('active');
            }

            handleFacultySubmit(e) {
                e.preventDefault();
                const id = document.getElementById('facultyId').value;
                const data = {
                    name: document.getElementById('facultyName').value,
                    title: document.getElementById('facultyTitle').value,
                    department: document.getElementById('facultyDepartment').value,
                    email: document.getElementById('facultyEmail').value,
                    phone: document.getElementById('facultyPhone').value,
                    office: document.getElementById('facultyOffice').value
                };

                if (id) {
                    this.dataManager.update('faculty', id, data);
                } else {
                    this.dataManager.create('faculty', data);
                }

                document.getElementById('facultyModal').classList.remove('active');
                this.loadFaculty();
                this.loadDashboard();
            }

            editFaculty(id) {
                this.openFacultyModal(id);
            }

            deleteFaculty(id) {
                if (confirm('Are you sure you want to delete this faculty member?')) {
                    this.dataManager.delete('faculty', id);
                    this.loadFaculty();
                    this.loadDashboard();
                }
            }

            // Course methods
            loadCourses(searchQuery = '') {
                let courses = this.dataManager.getAll('courses');
                const filterDept = document.getElementById('courseFilter').value;
                
                if (searchQuery) {
                    courses = courses.filter(c => 
                        c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        c.instructor.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                }

                if (filterDept) {
                    courses = courses.filter(c => c.department === filterDept);
                }

                const canEdit = this.authManager.getCurrentUser() && 
                               (this.authManager.hasRole('admin') || this.authManager.hasRole('it'));

                const html = courses.map(course => `
                    <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <div class="flex items-center space-x-3">
                                    <h3 class="text-lg font-semibold text-gray-900">${course.code}</h3>
                                    <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">${course.credits} Credits</span>
                                </div>
                                <p class="text-gray-800 mt-1">${course.name}</p>
                                <div class="mt-2 space-y-1">
                                    <p class="text-sm text-gray-500">
                                        <i class="fas fa-building mr-2"></i>${course.department}
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        <i class="fas fa-user-tie mr-2"></i>${course.instructor}
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        <i class="fas fa-clock mr-2"></i>${course.schedule}
                                    </p>
                                </div>
                            </div>
                            ${canEdit ? `
                                <div class="flex space-x-2 ml-4">
                                    <button onclick="uiManager.editCourse(${course.id})" 
                                            class="text-purple-600 hover:text-purple-800">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button onclick="uiManager.deleteCourse(${course.id})" 
                                            class="text-red-600 hover:text-red-800">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('');

                document.getElementById('coursesList').innerHTML = html || '<p class="text-gray-500 text-center py-8">No courses found.</p>';
            }

            populateCourseFilters() {
                const departments = this.dataManager.getAll('departments');
                const select = document.getElementById('courseFilter');
                const currentValue = select.value;
                
                select.innerHTML = '<option value="">All Departments</option>' +
                    departments.map(dept => `<option value="${dept.name}">${dept.name}</option>`).join('');
                
                select.value = currentValue;
                
                select.addEventListener('change', () => {
                    this.loadCourses(document.getElementById('courseSearch').value);
                });
            }

            openCourseModal(id = null) {
                const modal = document.getElementById('courseModal');
                const form = document.getElementById('courseForm');
                const deptSelect = document.getElementById('courseDepartment');
                const instructorSelect = document.getElementById('courseInstructor');
                
                // Populate departments
                const departments = this.dataManager.getAll('departments');
                deptSelect.innerHTML = departments.map(dept => 
                    `<option value="${dept.name}">${dept.name}</option>`
                ).join('');
                
                // Populate instructors
                const faculty = this.dataManager.getAll('faculty');
                instructorSelect.innerHTML = faculty.map(f => 
                    `<option value="${f.name}">${f.name}</option>`
                ).join('');
                
                if (id) {
                    const course = this.dataManager.getById('courses', id);
                    document.getElementById('courseModalTitle').textContent = 'Edit Course';
                    document.getElementById('courseId').value = course.id;
                    document.getElementById('courseCode').value = course.code;
                    document.getElementById('courseName').value = course.name;
                    document.getElementById('courseDepartment').value = course.department;
                    document.getElementById('courseCredits').value = course.credits;
                    document.getElementById('courseInstructor').value = course.instructor;
                    document.getElementById('courseSchedule').value = course.schedule;
                } else {
                    document.getElementById('courseModalTitle').textContent = 'Add Course';
                    form.reset();
                    document.getElementById('courseId').value = '';
                }
                
                modal.classList.add('active');
            }

            handleCourseSubmit(e) {
                e.preventDefault();
                const id = document.getElementById('courseId').value;
                const data = {
                    code: document.getElementById('courseCode').value,
                    name: document.getElementById('courseName').value,
                    department: document.getElementById('courseDepartment').value,
                    credits: document.getElementById('courseCredits').value,
                    instructor: document.getElementById('courseInstructor').value,
                    schedule: document.getElementById('courseSchedule').value
                };

                if (id) {
                    this.dataManager.update('courses', id, data);
                } else {
                    this.dataManager.create('courses', data);
                }

                document.getElementById('courseModal').classList.remove('active');
                this.loadCourses();
                this.loadDashboard();
            }

            editCourse(id) {
                this.openCourseModal(id);
            }

            deleteCourse(id) {
                if (confirm('Are you sure you want to delete this course?')) {
                    this.dataManager.delete('courses', id);
                    this.loadCourses();
                    this.loadDashboard();
                }
            }

            // Announcement methods
            loadAnnouncements() {
                const announcements = this.dataManager.getAll('announcements');
                const sortedAnnouncements = announcements.sort((a, b) => new Date(b.date) - new Date(a.date));

                const canEdit = this.authManager.getCurrentUser() && 
                               (this.authManager.hasRole('admin') || this.authManager.hasRole('it'));

                const html = sortedAnnouncements.map(ann => `
                    <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <div class="flex items-center space-x-3 mb-2">
                                    <h3 class="text-lg font-semibold text-gray-900">${ann.title}</h3>
                                    <span class="bg-${this.getPriorityColorClass(ann.priority)}-100 text-${this.getPriorityColorClass(ann.priority)}-800 text-xs px-2 py-1 rounded-full">
                                        ${ann.priority.toUpperCase()}
                                    </span>
                                    <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                        ${ann.audience.toUpperCase()}
                                    </span>
                                </div>
                                <p class="text-gray-700 mb-3">${ann.content}</p>
                                <p class="text-sm text-gray-500">
                                    <i class="fas fa-calendar mr-2"></i>
                                    ${new Date(ann.date).toLocaleDateString()}
                                </p>
                            </div>
                            ${canEdit ? `
                                <div class="flex space-x-2 ml-4">
                                    <button onclick="uiManager.editAnnouncement(${ann.id})" 
                                            class="text-red-600 hover:text-red-800">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button onclick="uiManager.deleteAnnouncement(${ann.id})" 
                                            class="text-red-600 hover:text-red-800">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('');

                document.getElementById('announcementsList').innerHTML = html || '<p class="text-gray-500 text-center py-8">No announcements found.</p>';
            }

            getPriorityColorClass(priority) {
                const colors = {
                    low: 'green',
                    medium: 'yellow',
                    high: 'orange',
                    urgent: 'red'
                };
                return colors[priority] || 'gray';
            }

            openAnnouncementModal(id = null) {
                const modal = document.getElementById('announcementModal');
                const form = document.getElementById('announcementForm');
                
                if (id) {
                    const announcement = this.dataManager.getById('announcements', id);
                    document.getElementById('announcementModalTitle').textContent = 'Edit Announcement';
                    document.getElementById('announcementId').value = announcement.id;
                    document.getElementById('announcementTitle').value = announcement.title;
                    document.getElementById('announcementContent').value = announcement.content;
                    document.getElementById('announcementPriority').value = announcement.priority;
                    document.getElementById('announcementAudience').value = announcement.audience;
                } else {
                    document.getElementById('announcementModalTitle').textContent = 'Create Announcement';
                    form.reset();
                    document.getElementById('announcementId').value = '';
                }
                
                modal.classList.add('active');
            }

            handleAnnouncementSubmit(e) {
                e.preventDefault();
                const id = document.getElementById('announcementId').value;
                const data = {
                    title: document.getElementById('announcementTitle').value,
                    content: document.getElementById('announcementContent').value,
                    priority: document.getElementById('announcementPriority').value,
                    audience: document.getElementById('announcementAudience').value,
                    date: new Date().toISOString()
                };

                if (id) {
                    this.dataManager.update('announcements', id, data);
                } else {
                    this.dataManager.create('announcements', data);
                }

                document.getElementById('announcementModal').classList.remove('active');
                this.loadAnnouncements();
                this.loadDashboard();
            }

            editAnnouncement(id) {
                this.openAnnouncementModal(id);
            }

            deleteAnnouncement(id) {
                if (confirm('Are you sure you want to delete this announcement?')) {
                    this.dataManager.delete('announcements', id);
                    this.loadAnnouncements();
                    this.loadDashboard();
                }
            }

            // Maps methods
            loadMaps() {
                const buildings = this.dataManager.getAll('buildings');

                const html = buildings.map(building => `
                    <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div class="flex items-start space-x-3">
                            <div class="bg-blue-100 text-blue-800 text-lg font-bold px-3 py-2 rounded-lg">
                                ${building.code}
                            </div>
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold text-gray-900">${building.name}</h3>
                                <p class="text-gray-600 mt-1">${building.description}</p>
                                <p class="text-sm text-gray-500 mt-2">
                                    <i class="fas fa-map-marker-alt mr-2"></i>${building.location}
                                </p>
                            </div>
                        </div>
                    </div>
                `).join('');

                document.getElementById('buildingList').innerHTML = html;
            }

            // Resources methods
            loadResources(searchQuery = '') {
                let resources = this.dataManager.getAll('resources');
                
                if (searchQuery) {
                    resources = resources.filter(res => 
                        res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        res.category.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                }

                const canEdit = this.authManager.getCurrentUser() && 
                               (this.authManager.hasRole('admin') || this.authManager.hasRole('it'));

                const html = resources.map(resource => `
                    <div class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <div class="flex items-center space-x-2 mb-2">
                                    <i class="fas fa-file-alt text-indigo-600 text-xl"></i>
                                    <h3 class="text-lg font-semibold text-gray-900">${resource.name}</h3>
                                </div>
                                <p class="text-gray-600 text-sm mb-2">${resource.description}</p>
                                <div class="flex items-center space-x-4 text-xs text-gray-500">
                                    <span class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                                        ${resource.category.toUpperCase()}
                                    </span>
                                    <span>${resource.size}</span>
                                </div>
                                <div class="mt-3">
                                    <button class="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 transition-colors">
                                        <i class="fas fa-download mr-1"></i>Download
                                    </button>
                                </div>
                            </div>
                            ${canEdit ? `
                                <div class="flex space-x-2 ml-4">
                                    <button onclick="uiManager.editResource(${resource.id})" 
                                            class="text-indigo-600 hover:text-indigo-800">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button onclick="uiManager.deleteResource(${resource.id})" 
                                            class="text-red-600 hover:text-red-800">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('');

                document.getElementById('resourcesList').innerHTML = html || '<p class="text-gray-500 text-center py-8 col-span-full">No resources found.</p>';
            }

            openResourceModal(id = null) {
                const modal = document.getElementById('resourceModal');
                const form = document.getElementById('resourceForm');
                
                if (id) {
                    const resource = this.dataManager.getById('resources', id);
                    document.getElementById('resourceModalTitle').textContent = 'Edit Resource';
                    document.getElementById('resourceId').value = resource.id;
                    document.getElementById('resourceName').value = resource.name;
                    document.getElementById('resourceDescription').value = resource.description;
                    document.getElementById('resourceCategory').value = resource.category;
                } else {
                    document.getElementById('resourceModalTitle').textContent = 'Add Resource';
                    form.reset();
                    document.getElementById('resourceId').value = '';
                }
                
                modal.classList.add('active');
            }

            handleResourceSubmit(e) {
                e.preventDefault();
                const id = document.getElementById('resourceId').value;
                const fileInput = document.getElementById('resourceFile');
                const file = fileInput.files[0];
                
                const data = {
                    name: document.getElementById('resourceName').value,
                    description: document.getElementById('resourceDescription').value,
                    category: document.getElementById('resourceCategory').value,
                    fileUrl: file ? URL.createObjectURL(file) : '#',
                    size: file ? `${Math.round(file.size / 1024)} KB` : 'Unknown'
                };

                if (id) {
                    this.dataManager.update('resources', id, data);
                } else {
                    this.dataManager.create('resources', data);
                }

                document.getElementById('resourceModal').classList.remove('active');
                this.loadResources();
            }

            editResource(id) {
                this.openResourceModal(id);
            }

            deleteResource(id) {
                if (confirm('Are you sure you want to delete this resource?')) {
                    this.dataManager.delete('resources', id);
                    this.loadResources();
                }
            }

            // User management methods
            loadUsers(searchQuery = '') {
                let users = this.dataManager.getAll('users');
                
                if (searchQuery) {
                    users = users.filter(user => 
                        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        user.role.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                }

                const html = users.map(user => `
                    <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <div class="flex items-center space-x-3 mb-2">
                                    <h3 class="text-lg font-semibold text-gray-900">${user.fullName}</h3>
                                    <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                                        ${user.role.toUpperCase()}
                                    </span>
                                    <span class="text-xs px-2 py-1 rounded-full ${user.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                                        ${user.active ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
                                <div class="space-y-1">
                                    <p class="text-sm text-gray-600">
                                        <i class="fas fa-user mr-2"></i>${user.username}
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        <i class="fas fa-envelope mr-2"></i>${user.email}
                                    </p>
                                </div>
                            </div>
                            <div class="flex space-x-2 ml-4">
                                <button onclick="uiManager.editUser(${user.id})" 
                                        class="text-yellow-600 hover:text-yellow-800">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button onclick="uiManager.toggleUserStatus(${user.id})" 
                                        class="text-blue-600 hover:text-blue-800">
                                    <i class="fas fa-${user.active ? 'pause' : 'play'}"></i>
                                </button>
                                <button onclick="uiManager.deleteUser(${user.id})" 
                                        class="text-red-600 hover:text-red-800">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');

                document.getElementById('usersList').innerHTML = html || '<p class="text-gray-500 text-center py-8">No users found.</p>';
            }

            openUserModal(id = null) {
                const modal = document.getElementById('userModal');
                const form = document.getElementById('userForm');
                
                if (id) {
                    const user = this.dataManager.getById('users', id);
                    document.getElementById('userModalTitle').textContent = 'Edit User';
                    document.getElementById('userId').value = user.id;
                    document.getElementById('userUsername').value = user.username;
                    document.getElementById('userFullName').value = user.fullName;
                    document.getElementById('userEmail').value = user.email;
                    document.getElementById('userRole').value = user.role;
                    document.getElementById('userPassword').value = user.password;
                } else {
                    document.getElementById('userModalTitle').textContent = 'Add User';
                    form.reset();
                    document.getElementById('userId').value = '';
                }
                
                modal.classList.add('active');
            }

            handleUserSubmit(e) {
                e.preventDefault();
                const id = document.getElementById('userId').value;
                const data = {
                    username: document.getElementById('userUsername').value,
                    fullName: document.getElementById('userFullName').value,
                    email: document.getElementById('userEmail').value,
                    role: document.getElementById('userRole').value,
                    password: document.getElementById('userPassword').value,
                    active: true
                };

                if (id) {
                    this.dataManager.update('users', id, data);
                } else {
                    this.dataManager.create('users', data);
                }

                document.getElementById('userModal').classList.remove('active');
                this.loadUsers();
            }

            editUser(id) {
                this.openUserModal(id);
            }

            toggleUserStatus(id) {
                const user = this.dataManager.getById('users', id);
                this.dataManager.update('users', id, { active: !user.active });
                this.loadUsers();
            }

            deleteUser(id) {
                if (confirm('Are you sure you want to delete this user?')) {
                    this.dataManager.delete('users', id);
                    this.loadUsers();
                }
            }

            // Analytics methods
            loadAnalytics() {
                this.createUserActivityChart();
                this.createContentStatsChart();
                this.loadSystemActivity();
            }

            createUserActivityChart() {
                const ctx = document.getElementById('userActivityChart').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        datasets: [{
                            label: 'Daily Active Users',
                            data: [65, 78, 90, 81, 95, 45, 32],
                            borderColor: 'rgb(59, 130, 246)',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }

            createContentStatsChart() {
                const ctx = document.getElementById('contentStatsChart').getContext('2d');
                const departments = this.dataManager.getAll('departments');
                const faculty = this.dataManager.getAll('faculty');
                const courses = this.dataManager.getAll('courses');
                const announcements = this.dataManager.getAll('announcements');

                new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Departments', 'Faculty', 'Courses', 'Announcements'],
                        datasets: [{
                            data: [departments.length, faculty.length, courses.length, announcements.length],
                            backgroundColor: [
                                'rgb(59, 130, 246)',
                                'rgb(34, 197, 94)',
                                'rgb(168, 85, 247)',
                                'rgb(239, 68, 68)'
                            ]
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            }

            loadSystemActivity() {
                const activities = [
                    { action: 'User Login', user: 'john.doe', time: '2 minutes ago' },
                    { action: 'Course Added', user: 'admin', time: '15 minutes ago' },
                    { action: 'Announcement Published', user: 'admin', time: '1 hour ago' },
                    { action: 'Faculty Profile Updated', user: 'jane.smith', time: '2 hours ago' },
                    { action: 'Department Created', user: 'admin', time: '1 day ago' }
                ];

                const html = activities.map(activity => `
                    <div class="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <div>
                            <p class="text-sm font-medium text-gray-900">${activity.action}</p>
                            <p class="text-xs text-gray-500">by ${activity.user}</p>
                        </div>
                        <p class="text-xs text-gray-500">${activity.time}</p>
                    </div>
                `).join('');

                document.getElementById('systemActivity').innerHTML = html;
            }

            // Settings methods
            loadSettings() {
                // Settings are already rendered in HTML
            }

            // Global search
            performGlobalSearch(query) {
                if (!query.trim()) {
                    document.getElementById('searchResults').classList.add('hidden');
                    return;
                }

                const results = [];
                
                // Search departments
                const departments = this.dataManager.search('departments', query);
                departments.forEach(dept => {
                    results.push({
                        type: 'Department',
                        title: dept.name,
                        description: dept.description,
                        action: () => {
                            this.switchTab('departments');
                            document.getElementById('deptSearch').value = query;
                            this.loadDepartments(query);
                        }
                    });
                });

                // Search faculty
                const faculty = this.dataManager.search('faculty', query);
                faculty.forEach(f => {
                    results.push({
                        type: 'Faculty',
                        title: f.name,
                        description: `${f.title} - ${f.department}`,
                        action: () => {
                            this.switchTab('faculty');
                            document.getElementById('facultySearch').value = query;
                            this.loadFaculty(query);
                        }
                    });
                });

                // Search courses
                const courses = this.dataManager.search('courses', query);
                courses.forEach(course => {
                    results.push({
                        type: 'Course',
                        title: `${course.code} - ${course.name}`,
                        description: `${course.instructor} - ${course.schedule}`,
                        action: () => {
                            this.switchTab('courses');
                            document.getElementById('courseSearch').value = query;
                            this.loadCourses(query);
                        }
                    });
                });

                if (results.length > 0) {
                    const html = results.slice(0, 5).map(result => `
                        <div class="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-200 last:border-b-0" 
                             onclick="(${result.action.toString()})(); document.getElementById('searchResults').classList.add('hidden');">
                            <div class="flex justify-between items-start">
                                <div>
                                    <p class="font-medium text-gray-900">${result.title}</p>
                                    <p class="text-sm text-gray-600">${result.description}</p>
                                </div>
                                <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">${result.type}</span>
                            </div>
                        </div>
                    `).join('');

                    document.getElementById('searchResults').innerHTML = html;
                    document.getElementById('searchResults').classList.remove('hidden');
                } else {
                    document.getElementById('searchResults').innerHTML = '<div class="p-3 text-gray-500 text-center">No results found</div>';
                    document.getElementById('searchResults').classList.remove('hidden');
                }
            }

            // Export functionality
            exportData() {
                const allData = {
                    departments: this.dataManager.getAll('departments'),
                    faculty: this.dataManager.getAll('faculty'),
                    courses: this.dataManager.getAll('courses'),
                    announcements: this.dataManager.getAll('announcements'),
                    resources: this.dataManager.getAll('resources'),
                    users: this.dataManager.getAll('users'),
                    buildings: this.dataManager.getAll('buildings'),
                    exportDate: new Date().toISOString()
                };

                const dataStr = JSON.stringify(allData, null, 2);
                const dataBlob = new Blob([dataStr], { type: 'application/json' });
                const url = URL.createObjectURL(dataBlob);
                
                const link = document.createElement('a');
                link.href = url;
                link.download = `cims-data-export-${new Date().toISOString().split('T')[0]}.json`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                URL.revokeObjectURL(url);
                alert('Data exported successfully!');
            }
        }

        // Global functions for onclick handlers
        function switchTab(tabName) {
            uiManager.switchTab(tabName);
        }

        // Initialize the application
        let uiManager;
        document.addEventListener('DOMContentLoaded', function() {
            uiManager = new UIManager();
        });

        // Hide search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!document.getElementById('globalSearch').contains(e.target) && 
                !document.getElementById('searchResults').contains(e.target)) {
                document.getElementById('searchResults').classList.add('hidden');
            }
        });
    
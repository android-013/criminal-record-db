// 1. Supabase Configuration
// Replace with your actual Supabase URL and Anon Key
const SUPABASE_URL = 'https://pljllsmjzuitkyrhmuye.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsamxsc21qenVpdGt5cmhtdXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzU1MDMsImV4cCI6MjA3MTExMTUwM30.kIHKC4CAY3XMICykxgDZkD2D5RldKP2a7i-KwbSBr8s';

// Import the Supabase client library (for browser usage, ensure this script is loaded in your HTML):
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

// 2. Initialize the Supabase Client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 3. Get a reference to the table body
const tableBody = document.getElementById('table-body');

// 4. Create an async function to fetch and display the data
async function fetchOfficers() {
    // Call the 'get_all_officers' function we created in Supabase
    const { data, error } = await supabase.rpc('get_all_officers');

    if (error) {
        console.error('Error fetching officers:', error);
        tableBody.innerHTML = `<tr><td colspan="4">Error loading data.</td></tr>`;
        return;
    }

    if (data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4">No officers found.</td></tr>`;
        return;
    }

    // Clear any existing content
    tableBody.innerHTML = '';

    // 5. Loop through the data and create a table row for each officer
    data.forEach(officer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${officer.name}</td>
            <td>${officer.badge_number}</td>
            <td>${officer.rank}</td>
            <td>${officer.police_station}</td>
        `;
        tableBody.appendChild(row);
    });
}

// 6. Call the function when the page loads
fetchOfficers();
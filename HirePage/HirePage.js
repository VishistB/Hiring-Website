async function fetchApplicantsData() {
    try {
      const response = await fetch('./applicants.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching applicants data:', error);
    }
  }
  
  async function initializeApp() {
    const applicantsData = await fetchApplicantsData();
    let filteredApplicants = [];
  
    function generateDataboxElements() {
      const candidateDataWrap = document.querySelector('.candidateDataWrap');
      candidateDataWrap.innerHTML = ''; // Clear existing content
  
      filteredApplicants.forEach(applicant => {
        if (!applicant.shortlist) {
          const databox = document.createElement('div');
          databox.classList.add('databox');
  
          const name = document.createElement('div');
          name.classList.add('item', 'dataName');
          name.textContent = applicant.name;
  
          const location = document.createElement('div');
          location.classList.add('item', 'dataLocation');
          location.textContent = applicant.location;
  
          const emptyDiv = document.createElement('div');
          emptyDiv.classList.add('item');
  
          const role = document.createElement('div');
          role.classList.add('item', 'dataRole');
          role.textContent = applicant.job_role;
  
          const rating = document.createElement('div');
          rating.classList.add('item', 'dataRating');
          rating.textContent = applicant.rating;
  
          const shortlistBtn = document.createElement('button');
          shortlistBtn.classList.add('item', 'shortlistbtn');
          shortlistBtn.textContent = 'Shortlist';
          shortlistBtn.addEventListener('click', () => {
            applicant.shortlist = true; // Update shortlist value in memory
            generateDataboxElements(); // Re-render databox elements
          });
  
          databox.appendChild(name);
          databox.appendChild(location);
          databox.appendChild(emptyDiv);
          databox.appendChild(role);
          databox.appendChild(rating);
          databox.appendChild(shortlistBtn);
  
          candidateDataWrap.appendChild(databox);
        }
      });
    }
  
    function applyFilters() {
      const searchName = document.querySelector('.searchinp').value.toLowerCase().trim();
      const searchLocation = document.querySelector('.Locationinp').value.toLowerCase().trim();
      const searchRole = document.querySelector('.roleinp').value.toLowerCase().trim();
  
      filteredApplicants = applicantsData.applicants.filter(applicant => !applicant.shortlist); // Exclude shortlisted applicants
  
      if (searchName || searchLocation || searchRole) {
        filteredApplicants = filteredApplicants.filter(applicant => {
          const nameMatch = searchName === '' || applicant.name.toLowerCase().includes(searchName);
          const locationMatch = searchLocation === '' || applicant.location.toLowerCase().includes(searchLocation);
          const roleMatch = searchRole === '' || applicant.job_role.toLowerCase().includes(searchRole);
  
          return nameMatch && locationMatch && roleMatch;
        });
      }
  
      generateDataboxElements();
    }
  
    const searchInputs = document.querySelectorAll('.searchinp, .Locationinp, .roleinp');
    searchInputs.forEach(input => {
      input.addEventListener('input', applyFilters);
    });
  
    applyFilters(); // Initial data load
  
    generateDataboxElements();
  }
  
  initializeApp();
  
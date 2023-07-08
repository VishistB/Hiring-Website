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
  
    function generateDataboxElements(applicants) {
      const candidateDataWrap = document.querySelector('.candidateDataWrap');
  
      applicants.forEach(applicant => {
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
  
        databox.appendChild(name);
        databox.appendChild(location);
        databox.appendChild(emptyDiv);
        databox.appendChild(role);
        databox.appendChild(rating);
        databox.appendChild(shortlistBtn);
  
        candidateDataWrap.appendChild(databox);
      });
    }
  
    generateDataboxElements(applicantsData.applicants);
  }
  
  initializeApp();
  
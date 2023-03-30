const axios = require('axios');

const apiKey = 'YOUR_API_KEY';
const apiBaseUrl = 'https://YOUR_SYS_AID_URL/api/v1';

async function getSRsWithGroup(groupName) {
  try {
    const response = await axios.get(`${apiBaseUrl}/sr`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      params: {
        group: groupName,
      },
    });

    return response.data;
  } catch (error) {
    console.error(`Error getting SRs with group ${groupName}: ${error.message}`);
  }
}

// Example usage: get SRs with group "IT Support"
getSRsWithGroup('IT Support')
  .then((data) => {
    console.log(data);
  });

const apiKey = 'YOUR_API_KEY';
const apiBaseUrl = 'https://YOUR_SYS_AID_URL/api/v1';

function makeApiRequest(endpoint, method, data) {
  return fetch(`${apiBaseUrl}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(`Error making API request: ${error.message}`);
    });
}

// Example usage: get all open incidents
makeApiRequest('/incidents?status=open', 'GET')
  .then((data) => {
    console.log(data);
  });

// Example usage: create a new incident
makeApiRequest('/incidents', 'POST', {
  title: 'New incident',
  description: 'This is a new incident created via the API',
  priority: '3',
})
  .then((data) => {
    console.log(data);
  });




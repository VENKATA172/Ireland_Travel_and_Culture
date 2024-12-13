const API_URL = "http://localhost:8080/api";
const token = localStorage.getItem('token');

export const register = (user) => {
  return fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
};

export const login = (user) => {
  return fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
};

export const getDestinations = () => {
  return fetch(`${API_URL}/user/destinations`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

export const getEvents = () => {
  return fetch(`${API_URL}/user/events`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

export const getAccommodations = () => {
  return fetch(`${API_URL}/user/accommodations`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

export const getTravelTips = () => {
  return fetch(`${API_URL}/user/travel-tips`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

export const getAllUsers = () => {
  return fetch(`${API_URL}/admin/users`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

export const approveUser = (id) => {
  return fetch(`${API_URL}/admin/users/${id}/approve`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

export const denyUser = (id) => {
  return fetch(`${API_URL}/admin/users/${id}/deny`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

export const logout = () => {
  return fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

export const getUserRole = async () => {
  if (!token) return null;

  try {
    const response = await fetch(`${API_URL}/auth/role`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    if (response.status === 401 && data.message === "Token expired!") {
      localStorage.removeItem('token');
      window.location.href = '/login';
      return null;
    }
    return data.role;
  } catch (error) {
    console.error("Error getting user role:", error);
    return null;
  }
};

export const createEvent = (event) => {
  return fetch(`${API_URL}/admin/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(event)
  });
};

export const updateEvent = (id, event) => {
  return fetch(`${API_URL}/admin/events/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(event)
  });
};

export const deleteEvent = (id) => {
  return fetch(`${API_URL}/admin/events/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

export const suspendUser = (id) => {
  return fetch(`${API_URL}/admin/users/${id}/suspend`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

export const createTravelTip = (travelTip) => {
  return fetch(`${API_URL}/admin/travel-tips`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(travelTip)
  });
};

export const updateTravelTip = (id, travelTip) => {
  return fetch(`${API_URL}/admin/travel-tips/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(travelTip)
  });
};

export const deleteTravelTip = (id) => {
  return fetch(`${API_URL}/admin/travel-tips/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

export const createDestination = (destination) => {
  return fetch(`${API_URL}/admin/destinations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(destination)
  });
};

export const updateDestination = (id, destination) => {
  return fetch(`${API_URL}/admin/destinations/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(destination)
  });
};

export const deleteDestination = (id) => {
  return fetch(`${API_URL}/admin/destinations/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};

const baseURL = 'http://localhost:3001/videos';

export const getVideos = async () => {
  try {
    const response = await fetch(`${baseURL}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};

export const addVideo = async (newVideo) => {
  try {
    const response = await fetch(`${baseURL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVideo),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding video:', error);
  }
};

export const deleteVideo = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return id;
  } catch (error) {
    console.error('Error deleting video:', error);
  }
};

export const updateVideo = async (updatedVideo) => {
  try {
    const response = await fetch(`${baseURL}/${updatedVideo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedVideo),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating video:', error);
  }
};



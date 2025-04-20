// JavaScript to handle form submission
document.getElementById('list-item-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const itemName = document.getElementById('item-name').value;
    const itemDescription = document.getElementById('item-description').value;
    const itemPrice = document.getElementById('item-price').value;
    const itemImage = document.getElementById('item-image').value;
  
    // Add new item to the listing (this can later be connected to a backend)
    const newItem = `
      <div class="item-card">
        <img src="${itemImage}" alt="${itemName}" class="item-image" />
        <div class="item-info">
          <h3>${itemName}</h3>
          <p>${itemDescription}</p>
          <p><strong>Price: $${itemPrice}/day</strong></p>
          <button class="rent-btn">Rent Now</button>
        </div>
      </div>
    `;
  
    document.querySelector('.cards-container').insertAdjacentHTML('beforeend', newItem);
  
    // Clear the form after submission
    document.getElementById('list-item-form').reset();
  });
  
<!DOCTYPE html>
<html>
<head>
  <title>GEN X AI - Products</title>
  <!-- Add your CSS styles and scripts here -->
</head>
<body>
  <h1>GEN X AI</h1>
  
  <h2>Products</h2>
  
  <div class="product">
    <h3>Digital Marketing AI Bot</h3>
    <p>Price: ₹600</p>
    <button onclick="preBook('Digital Marketing AI Bot')">Pre-Book</button>
  </div>
  
  <div class="product">
    <h3>Power BI AI Bot</h3>
    <p>Price: ₹600</p>
    <button onclick="preBook('Power BI AI Bot')">Pre-Book</button>
  </div>
  
  <div class="product">
    <h3>Website Building AI Bot</h3>
    <p>Price: ₹600</p>
    <button onclick="preBook('Website Building AI Bot')">Pre-Book</button>
  </div>
  
  <div class="product">
    <h3>Game Building AI Bot</h3>
    <p>Price: ₹600</p>
    <button onclick="preBook('Game Building AI Bot')">Pre-Book</button>
  </div>
  
  <div class="product">
    <h3>Software Development AI Bot</h3>
    <p>Price: ₹600</p>
    <button onclick="preBook('Software Development AI Bot')">Pre-Book</button>
  </div>
  
  <h2>Contact</h2>
  
  <form id="contactForm" action="/submit" method="post">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
    <input type="submit" value="Submit">
  </form>
  
  <footer>
    <p>© 2023 My Website. All rights reserved.</p>
  </footer>

  <script>
    function preBook(productName) {
      // You can perform any necessary actions here, such as displaying a confirmation message or sending the data to the server.
      function preBook(productName) {
        console.log('Pre-Book', productName);
    }
    
  </script>
</body>
</html>

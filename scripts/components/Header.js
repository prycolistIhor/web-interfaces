export const Header = () => `
    <header class="header">
      <div class="logo">NEWS</div>

      <nav class="nav">
        <a href="/" class="nav-link" data-link tabindex="1">Home</a>
        <a href="/about" class="nav-link" data-link tabindex="2">About</a>
        <a href="/contact" class="nav-link" data-link tabindex="3">Contact</a>
        <a href="/posts" class="nav-link" data-link tabindex="4">Posts</a>
        <input type="text" id="searchInput" placeholder="Search..." tabindex="5"/>
      </nav>

      <div>
        <button id="loginBtn" class="auth-btn" tabindex="6">Login</button>
        <img
          src="./images/profile.png?v=1"
          class="profile"
          id="profileImg"
          style="display: none"
        />
      </div>
    </header>
`;

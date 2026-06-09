export const Header = () => `
    <header class="header">
      <div class="logo">NEWS</div>

      <nav class="nav">
        <a href="/" class="nav-link" data-link>Home</a>
        <a href="/about" class="nav-link" data-link>About</a>
        <a href="/contact" class="nav-link" data-link>Contact</a>
        <a href="/posts" class="nav-link" data-link>Posts</a>
        <input type="text" id="searchInput" placeholder="Search..."/>
      </nav>

      <div>
        <button id="loginBtn" class="auth-btn">Login</button>
        <img
          src="./images/profile.png?v=1"
          class="profile"
          id="profileImg"
          style="display: none"
        />
      </div>
    </header>
`;

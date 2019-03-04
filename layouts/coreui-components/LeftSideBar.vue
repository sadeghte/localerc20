<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="nav-icon icon-speedometer"></i> Dashboard
            <span class="badge badge-primary">NEW</span>
          </a>
        </li>
        <li class="nav-title">Theme</li>
        <li class="nav-item">
          <a class="nav-link" href="/profile">
            <i class="fa fa-user-circle"></i> Username</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/editProfile">
            <i class="fa fa-edit"></i> Edit Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/wallet">
            <i class="icon-wallet icons"></i> Wallet</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="typography.html">
            <i class="fa fa-bell-o"></i> Notifications</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/trades">
            <i class="fa fa-handshake-o"></i> Trades</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/disputes">
            <i class="fa fa-balance-scale"></i> Disputes</a>
        </li>
        <li class="nav-item nav-dropdown">
          <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="fa fa-buysellads"></i> Advertisements</a>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <a class="nav-link" href="/advertisements">
                <i class="nav-icon icon-puzzle"></i> List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/advertisements/new">
                <i class="nav-icon icon-puzzle"></i> New</a>
            </li>
          </ul>
        </li>
        <li class="nav-title">Settings</li>
      </ul>
    </nav>
    <button class="sidebar-minimizer brand-minimizer" type="button"></button>
  </div>
</template>
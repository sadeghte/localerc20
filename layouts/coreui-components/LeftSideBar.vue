<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="/">
            <i class="nav-icon icon-speedometer"></i> Home
            <span class="badge badge-primary">NEW</span>
          </a>
        </li>
        <li class="nav-title">Theme</li>
        <li class="nav-item">
          <a class="nav-link" href="/profile">
            <i class="nav-icon icon-user"></i> Profile</a>
        </li>
        <!--<li class="nav-item">-->
          <!--<a class="nav-link" href="/editProfile">-->
            <!--<i class="fa fa-edit"></i> Edit Profile</a>-->
        <!--</li>-->
        <li class="nav-item">
          <a class="nav-link" href="/wallet">
            <i class="nav-icon icon-wallet"></i> Wallet</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="typography.html">
            <i class="nav-icon icon-bell"></i> Notifications</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/trades">
            <i class="nav-icon fa fa-handshake-o"></i> Trades</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/disputes">
            <i class="nav-icon fa fa-balance-scale"></i> Disputes</a>
        </li>
        <li class="nav-item nav-dropdown">
          <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="nav-icon fa fa-buysellads"></i> Advertisements</a>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <a class="nav-link" href="/advertisement">
                <i class="nav-icon icon-puzzle"></i> List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/advertisement/new">
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
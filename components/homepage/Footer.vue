<template>
  <footer
    class="page-footer indigo darken-4 white-text"
    style="border:solid 1px indigo"
  >
    <Container>
      <GridRow>
        <GridItem :sm="4" :md="3" :smOffset="2" :mdOffset="3">
          <h5>About</h5>
          <ul class="white-text">
            <li>
              <a class="white-text" href="#!">Blog</a>
            </li>
          </ul>
        </GridItem>

        <GridItem :sm="4" :md="3" :smOffset="2" :mdOffset="3">
          <h5>Contact</h5>
          <ul>
            <li>
              <a class="white-text" href="#!">Twitter</a>
            </li>
            <li>
              <a class="white-text" href="#!">Facebook</a>
            </li>
            <li>
              <a class="white-text" href="#!">Github</a>
            </li>
          </ul>
        </GridItem>
      </GridRow>
      <GridRow>
        <GridItem :sm="12">
          <div class="footer-copyright center-align">
            <Container
              >© {{ new Date().getFullYear() }} wedoyourfarm.com</Container
            >
          </div>
        </GridItem>
      </GridRow>
    </Container>
  </footer>
</template>

<template>
  <header class="freelancre valign">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="img">
            <img src="/img/hero.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-8 valign">
          <div class="cont">
            <h1 class="cd-headline clip">
              Hello, My name is Landry OHIN, i'm developer from Benin. I'm passionate about building great software. I love coding and design and i hope to make awesome things.
               I love
              <span class="cd-words-wrapper">
                <VueTyper
                  :text="['to code cool Website.','to code in Flutter.','to code in Laravel.','to code in Vue JS.','to code in Wordpress.', 'to desing in Photoshop','to desing in Illustrator']"
                  :repeat="Infinity"
                  initial-action="erasing"
                  :pre-type-delay="70"
                  :type-delay="70"
                  :pre-erase-delay="2000"
                  :erase-delay="250"
                  erase-style="backspace"
                  caret-animation="smooth"
                  class="color-font fw-600"
                ></VueTyper>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div class="states">
        <div class="container">
          <ul class="flex">


            <li class="flex">

              <div class="social-media">
                <a href="https://www.linkedin.com/in/landry-a-ohin-053179188">
                  <i class="fab fa-linkedin"></i>
                </a>

                <a href="https://wa.me/+22967181329">
                  <i class="fab fa-whatsapp"></i> </a>
                <a href="mailto:your@email.com?subject=Subject">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </li>

            <li class="mail-us">
              <a href="mailto:your@email.com?subject=Subject">
                <div class="flex">
                  <div class="text valign">
                    <div class="full-width">
                      <p>Call me at +22967181329</p>
                      <h6>landrohin@gmail.com</h6>
                    </div>
                  </div>
                  <div class="mail-icon">
                    <div class="icon-box">
                      <span class="icon color-font pe-7s-mail"></span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="line bottom left"></div>
  </header>
</template>

<script>
export default {};
</script>

<style>
span.right {
    display: none !important;
}
span.caret:empty:before {
    content: "\200B";
    background: #fff;
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
}
</style>

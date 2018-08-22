<template>
    <footer class="footer">
      <p class="footer__p">
        Donations:&nbsp
        <a class="footer__link" href="#">l2kj4lk2j4l2n42#KLMm</a>
      </p>
      <p class="footer__p">
        Official TOR mirror:&nbsp
        <a class="footer__link" href="#">supercrypta.tor.link</a>
      </p>
    </footer>
</template>

<script>
export default {
  name: 'AFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 10px;
  border-top: 1px solid lightskyblue;
  font-size: 14px;
  line-height: 22px;
  &__p {
    margin: 0;
    color: lightskyblue;
    font-weight: 300;
    text-align: center;
  }
  &__link {
    color: dodgerblue;
    font-weight: 400;
    text-decoration: none;
  }
}

@media screen and (min-width: 768px) {
  .footer {
    padding: 15px;
    font-size: 16px;
    line-height: 24px;
  }
}

@media screen and (min-width: 1024px) {
  .footer {
    padding: 20px;
    font-size: 18px;
    line-height: 26px;
  }
}
</style>

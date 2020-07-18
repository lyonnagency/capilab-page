<template>
  <div class="header-capilab container-capilab mt-5 txt-base ff-intelo-semi-b fw-500">
    <!--Menu superior-->
    <b-row class="header-info" align-v="center" align-h="center">
      <b-col class="hide-sm" >
        <a href="https://www.facebook.com/CapilabCosmetics/" target="_blank"><span class="facebook-capilab ico-capilab"></span></a>
        <a href="#"><span class="instagram-capilab ico-capilab"></span></a>
      </b-col>
      <b-col class="justify-content-center d-flex"><div class="logo-capilab"></div></b-col>
      <b-col class="hide-sm justify-content-end text-right ff-intelo-semi-b fw-500 track-200 fs-12">
        <a class="txt-base tel-link fs-13" href="tel:+524433694635">+52 (443) 369 4635</a>
      </b-col>
    </b-row>
    <!--Controles responsive-->
    <b-row class="responsive-controls container-capilab mx-0">
      <div class="menu-icon mt-3">
        <span></span>
      </div>
      <div class="shop-responsive">
      </div>
    </b-row>
    <!--Menu inferior-->
    <b-row class="mt-4 flex-nowrap contenedor-menu" align-v="center" align-h="center">
<!--      <b-col class="col-xl hide-sm">
        <span class="arrow track-200">ES</span>
      </b-col>-->
      <b-col cols="11" class="justify-content-center d-flex col-xl p-0">
        <ul class="menu-capilab ff-intelo-semi-b fw-500 track-200 fs-12">
          <!--<li><a href="#">Inicio</a></li>-->
          <li><a href="#beneficios">Beneficios</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li>
            <a href="#">
              <span class="shop">COMPRAR
                <span class="shop-icon"></span>
              </span>
            </a>
          </li>
        </ul>
      </b-col>
<!--      <b-col  class="col-xl justify-content-end text-right ff-intelo-semi-b fw-500 track-200 fs-12 hide-sm">

      </b-col>-->
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'headerCapilab'
}
</script>
<style >
</style>

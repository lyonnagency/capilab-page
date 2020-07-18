<template>
  <div class="caplab-root">
    <Header />
    <div class="hero-capilab container-capilab mt-4 row justify-content-around my-5">
      <b-col class="ml-xl-5 align-items-center row col-xl-4 col-12">
        <div class="col-xl-12 col flex-wrap d-flex text-white">
          <h1 class="mt-3 hero-text  col-12"><strong>Sé hermosa</strong> con <br> un cabello fuerte <br> y lleno de vida </h1>
          <a href="#" class=" btn-comprar ff-intelo-semi-b fw-500 track-200 fs-13 my-5">Comprar</a>
          <div class="col-12">
            <span class="mercado-libre " />
          </div>
        </div>
      </b-col>
      <b-col class="mr-5 botellas-hero-container">
        <!--<span class="botellas-capilab"></span>-->
        <img class="botellas-hero" src="/images/botellas-hero.png" alt="Productos capilab">
      </b-col>
    </div>
    <section class=" py-5 patron my-5">
      <div class="hoja-left" />
      <h2><strong>Capilab </strong> ha sido creado pensando en el cuidado de tu cabello</h2>
    </section>
    <section class=" container-capilab py-5 px-xl-5">
      <div id="beneficios"></div>
      <div class="row px-xl-4">
        <div class="col-xl col-6 capilab-card px-xl-5 py-5 d-flex justify-content-center mx-lg-2 mx-0 flex-wrap">
          <!--<div class="ico-card calidad my-3"></div>-->

          <div class="my-3">
            <calidadIco class="ico-card" />
          </div>
          <div class="titulo-card ff-playfair fw-700 fsty-italic fs-20">
            Mayor calidad
          </div>
          <div class="cuerpo-card ff-intelo fw-300 text-center mt-3 fs-14">
            Nuestra amplia experiencia con productos para el cabello nos permite brindar a tu cabello la perfecta combinación para un cabello lindo y saludable
          </div>
        </div>
        <div class="col-xl col-6 capilab-card px-xl-5 py-5 d-flex justify-content-center mx-lg-2 mx-0 flex-wrap">
          <div class="my-3">
            <naturalIco class="ico-card"/>
          </div>
          <div class="titulo-card ff-playfair fw-700 fsty-italic fs-20">
            100% Natural
          </div>
          <div class="cuerpo-card ff-intelo fw-300 text-center mt-3 fs-14">
            Los componentes naturales de cada producto ofrecen seguridad y confianza a quien lo usa
          </div>
        </div>
        <div class="col-xl col-6 capilab-card px-xl-5 py-5 d-flex justify-content-center mx-lg-2 mx-0 flex-wrap">
          <div class="my-3">
            <artesanalIco class="ico-card" />
          </div>
          <div class="titulo-card ff-playfair fw-700 fsty-italic fs-20">
            Producto Artesanal
          </div>
          <div class="cuerpo-card ff-intelo fw-300 text-center mt-3 fs-14">
            Al ser productos artesanales podemos conocer cada detalle de los productos y asegurar resultados profesionales para ti
          </div>
        </div>
        <div class="col-xl col-6 capilab-card px-xl-5 py-5 d-flex justify-content-center mx-lg-2 mx-0 flex-wrap">
          <div class="my-3">
            <paraTiIco class="ico-card" />
          </div>
          <div class="titulo-card ff-playfair fw-700 fsty-italic fs-20">
            Pensado para ti
          </div>
          <div class="cuerpo-card ff-intelo fw-300 text-center mt-3 fs-14">
            Para mujeres con estilo que buscan realzar su belleza
          </div>
        </div>
      </div>
    </section>
    <div id="productos"></div>
    <section class="galeria container-capilab py-5 ">
      <div class="hoja-bg"></div>
      <div class="hoja-bg hoja-menu"></div>
      <div class="px-xl-5">
        <ul class="menu-productos px-xl-5">
          <li
            v-for="(menuItem ,index) in menuList"
            :key="index"
            :class="{active_menu_gal:indiceActive==index}"
            @click="moverGaleria(index)"
          >
            {{ menuItem.menu}}
          </li>
        </ul>
      </div>
      <div class="contenedor-galeria mt-5 d-flex flex-wrap justify-content-center">
        <cardProducto
          v-for="(item,index) in productosPorMostrar"
          :key="index"
          :nombre-imagen="item.imgProducto"
          :nombre-producto="item.nombreProducto"
          :strong-nombre="item.strongNombre"
          :precio="item.precio"
          :descuento="item.descuento"
          @abreModal="modal_cap(item,index)"
          :indice="index"
        />
      </div>
    </section>
    <section class=" py-5 patron my-5">
      <div class="hoja-left move-right" />
      <h2><strong>Todos los productos al 20% de descuento </strong></h2>
      <h3 class="track-200 ff-intelo-semi-b fw-500 fs-16 mt-3">
        TODOS LOS VIERNES DURANTE ABRIL DE 2019
      </h3>
    </section>
    <section class="py-5 contact-form my-5 d-flex justify-content-center align-items-center">
      <div class="hoja-bg hoja-contact"></div>
      <div id="contacto"></div>
      <div class="wrap-mail col-xl-5 d-flex flex-wrap justify-content-center">
        <div class="col-6">
          <input v-model="correoFormulario" type="text" placeholder="ESCRIBE TU CORREO O TELÉFONO">
        </div>
        <div class="col-6">
          <button class="ff-intelo fw-300 fs-12 track-200 btn-enviar-correo" @click="validarForm">
            pedir información
          </button>
        </div>
        <transition name="slide-fade">
          <ul v-if="errors.length>0" class="col-12 errors-capilab">
            <li v-for="(error, index) in errors" :key="index" class="ff-intelo fw-300 fs-13 track-200">
              {{ error }}
            </li>
          </ul>
        </transition>
      </div>
    </section>
    <footer class="">
      <div class="footer-top d-flex container-capilab py-xl-5 flex-wrap">
        <div class="col-sm-4 col-12 ff-intelo-semi-b justify-content-xl-start justify-content-center fw-500 fs-13 footer-left track-200 d-flex flex-wrap align-items-center">
          <div>
            <p><a href="tel:+524433694635">+52 (443) 369 4635</a></p>
            <p><a href="maillto:hola@capilab.com.mx">hola@capilab.com.mx</a></p>
          </div>
        </div>
        <div class="col-sm-4 col-12 d-flex justify-content-center footer-center align-items-start"><div class="logo-capilab"></div></div>
        <div class="col-sm-4 col-12 d-flex justify-content-xl-end align-items-center justify-content-center">
          <a class="mr-2" href="https://www.facebook.com/CapilabCosmetics/" target="_blank"><span class="facebook-capilab ico-capilab"></span></a>
          <a href="#"><span class="instagram-capilab ico-capilab"></span></a>
        </div>
      </div>
      <div class="footer-bottom  ff-intelo-semi-b fw-500 py-3">
        <div class="d-flex container-capilab">
          <div class="col-6 d-flex align-items-center"><p>Copyright © 2019 Capilab Cosmetics</p></div>
          <div class="col-6 d-flex justify-content-end lyonn align-items-center"><a href="https://lyonn.co" target="_blank">From Lyonn Agency with love.</a></div>
        </div>
      </div>
    </footer>
    <b-modal
      id="modal1"
      ref="myModalRef"
      class="modal-product"
      header-class="noHeder"
      footer-class="noFooter"
      size="full"
      centered
      title-tag="h4"
    >
      <span class="close-modal" @click="cerrarModal" />
      <b-row class="row-modal">
        <b-col data-content="red" class="img-prod-modal d-flex justify-content-center align-items-center" xl="6" cols="12">
          <div itemprop="image" :href="urlProducto" class="cont-img-modal">
            <img class="img-fluid" :src="urlProducto" :alt="alt">
            <div class="circle-modal">
            </div>
          </div>
        </b-col>
        <b-col class="text-modal d-flex align-items-center mt-xl-0 mt-3" xl="6" cols="12">
          <div itemprop="brand" itemtype="http://schema.org/Thing" itemscope>
            <meta itemprop="name" content="Capilab" />
          </div>
          <meta itemprop="name" :content="nombreProducto + ' ' + strongNombre" />
          <meta itemprop="availability" content="https://schema.org/InStock" />
          <link itemprop="url" href="https://capilab.com.mx" />
          <meta itemprop="priceCurrency" content="MXN" />
          <meta itemprop="mpn" :content="idEnModal" />
          <div class="wrapper-contenido-modal d-flex flex-wrap" itemscope itemtype="http://schema.org/Product">
            <p itemprop="name" class="titulo-p mb-1 mt-5 col-12 fs-30">
              {{ nombreProducto }}<strong>{{ strongNombre }}</strong>
            </p>
            <div class="col-12" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
              <p itemprop="price" :content="precio" class="precio  track-200 mb-xl-5 mb-3 fs-30">
                $ {{ precio }}
              </p>
              <link itemprop="availability" href="http://schema.org/InStock" />
            </div>
            <span class="descripcion-producto col-8 my-xl-3 mb-0">
              <meta itemprop="duration" content="T0M15S" />
              <div itemprop="description"  v-html="descripcion" />
            </span>
            <div class="col-8 my-xl-3">
              <button class="btn-comprar-modal track-200">
                Comprar
              </button>
            </div>
            <div class="col-8 my-4">
              <a href="#"><span class="facebook-capilab ico-capilab"/></a>
              <a href="#"><span class="instagram-capilab ico-capilab"/></a>
            </div>
            <div class="col-8 controles-modal">
              <div class="prev" @click="prev" ><span></span></div>
              <div class="next" @click="next" ><span></span></div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import Header from '~/components/headerCapilab'
import calidadIco from '~/components/icons/calidad'
import naturalIco from '~/components/icons/natural'
import artesanalIco from '~/components/icons/artesanal'
import paraTiIco from '~/components/icons/para_ti'
import cardProducto from '~/components/cardProducto'
import Axios from 'axios'

export default {
  components: {
    Header,
    calidadIco,
    naturalIco,
    artesanalIco,
    paraTiIco,
    cardProducto
  },
  data() {
    return {
      menuList: [{ 'menu': 'Todos', 'categoria': 'todos' },
        { 'menu': 'Color y lleno de vida', 'categoria': 'color' },
        { 'menu': 'Limpieza e hidratación', 'categoria': 'limpieza' },
        { 'menu': 'Alisado y engrosamiento', 'categoria': 'alisado' },
        { 'menu': 'Manejo y sedocidad', 'categoria': 'manejo' }],
      indiceActive: 0,
      modal: true,
      urlProducto: 'matisse',
      alt: 'Tratamieno',
      nombreProducto: 'Color Intenso',
      strongNombre: 'Matisse®',
      precio: '190',
      descripcion: 'MATISSE es un shampoo matizador auxiliar para los procesos de coloración y tinte.',
      idEnModal: 0,
      datosFormulario: {},
      productos: [
        {
          imgProducto: 'matisse',
          nombreProducto: 'Color Intenso',
          strongNombre: 'Matisse®',
          precio: '190',
          descripcion: `<p>MATISSE es un shampoo matizador auxiliar para los procesos de coloración y tinte. </p>
                        <p>MATISSE neutraliza los colorantes presentes en tu cabello, evitando los reflejos no deseados al momento de cambiar de tinte y aumentando la duración y calidad de nuevos tintes y colorantes.</p>`,
          descuento: 10,
          categoria: 'color',
          color: '#803E8B'
        },
        {
          imgProducto: 'biodeep',
          nombreProducto: 'Limpieza profunda',
          strongNombre: 'Biodeep®',
          precio: '100',
          descripcion: `<p>BIODEEP es un shampoo de limpieza profunda, sus agentes activos remueven pigmentos no deseados y arrastran impurezas y residuos de tratamientos y procesos anteriores.</p>
                        <p>Sus ingredientes naturales suavizan y reparan el cabello tratado sin afectar tu cuero cabelludo.</p>`,
          descuento: 0,
          categoria: 'limpieza',
          color: '#c5946e'
        },
        {
          imgProducto: 'pinaplex',
          nombreProducto: 'Antes del Tinte',
          strongNombre: 'Pinaplex®',
          precio: '190',
          descripcion: `<p>PINAPLEX Antes Del Tinte es un tratamiento de reparación capilar.</p>
                        <p>Sus componentes reparan los enlaces químicos que se encuentran en el cabello, dejándolo fuerte, saludable y listo para la nueva coloración de tu preferencia.</p>`,
          descuento: 20,
          categoria: 'alisado',
          color: '#827A33'
        },
        {
          imgProducto: 'pinaplex-despues',
          nombreProducto: 'Después del Tinte',
          strongNombre: 'Pinaplex®',
          precio: '100',
          descripcion: `<p>PINAPLEX Después Del Tinte es un tratamiento de reparación capilar.</p>
                        <p>Sus componentes reparan los enlaces químicos de tu cabello que se encuentren dañados por decoloraciones o coloraciones anteriores, dejándolo con una estructura fuerte y saludable.</p>`,
          descuento: 0,
          categoria: 'manejo',
          color: '#A50932'
        },
        {
          imgProducto: 'keratina-gel',
          nombreProducto: 'Para el Frizz',
          strongNombre: 'Kerative Gel®',
          precio: '190',
          descripcion: `<p>KERATIVE es un tratamiento capilar de origen natural, creado para tratar cabello virgen que se encuentra seco y con frizz.</p>
                        <p>KERATIVE trabaja de forma progresiva gracias a su fórmula enriquecida con ingredientes de la más alta calidad. Hidrata tu cabello evitando el frizz mientras lo alisa, dejándolo suave y con un brillo natural.</p>`,
          descuento: 20,
          categoria: 'alisado',
          color: '#003FA2'
        },
        {
          imgProducto: 'keratina-liquida',
          nombreProducto: 'Para el Frizz',
          strongNombre: 'Kerative Liquida®',
          precio: '190',
          descripcion: `<p>KERATIVE es un tratamiento capilar de origen natural, creado para tratar cabello que ha pasado por procesos que provocaron sequedad y frizz.</p>
                        <p>KERATIVE trabaja de forma progresiva gracias a su fórmula enriquecida con ingredientes de la más alta calidad. Hidrata tu cabello evitando el frizz mientras lo alisa, dejándolo suave y con un brillo natural.</p>`,
          descuento: 0,
          categoria: 'color',
          color: '#722C69'
        },
        {
          imgProducto: 'botox-capilar',
          nombreProducto: 'Brillo y Vitalidad',
          strongNombre: 'Botoxx®',
          precio: '190',
          descripcion: `<p>BOTOXX es un tratamiento capilar botox creado a partir de ingredientes activos naturales.</p>
                        <p>La fórmula única de BOTOXX repara desde adentro las hebras capilares rotas o dañadas, revitalizando por completo el brillo natural de tu cabello y matizando su coloración.</p>`,
          descuento: 0,
          categoria: 'alisado',
          color: '#827A33'
        },
        {
          imgProducto: 'kerative-2',
          nombreProducto: 'Para el Frizz',
          strongNombre: 'Kerative® Liquida y Gel',
          precio: '250',
          descripcion: `<p>KERATIVE es un tratamiento capilar de origen natural, creado para tratar cabello seco y con frizz.</p>
                        <p>KERATIVE trabaja de forma progresiva gracias a su fórmula enriquecida con ingredientes de la más alta calidad. Hidrata tu cabello evitando el frizz mientras lo alisa, dejándolo suave y con un brillo natural.</p>`,
          descuento: 15,
          categoria: 'limpieza',
          color: '#003FA2'
        },
        {
          imgProducto: 'pinaplex-2',
          nombreProducto: 'Antes y Después del Tinte',
          strongNombre: 'Pinaplex®',
          precio: '190',
          descripcion: `<p>PINAPLEX es un tratamiento reparador para el cabello de última generación que ha generado innumerables críticas positivas en salones especializados y coloristas en todo México.</p>
                        <p>PINAPLEX repara el cabello dañado, mantiene y multiplica el enlace de los puentes cistinos saludables de tu cabello y repara los enlaces rotos, dándole a tu cabello mayor fuerza y salud después de la aplicación de procesos químicos por coloración o decoloración.</p>`,
          descuento: 10,
          categoria: 'color',
          color: '#827A33'
        }

      ],
      itemModal: '',
      arrMostrarGlobal: [],
      correoFormulario: '',
      errors: [],
      circle: '',
      colorCirculo: 'red'
    }
  },
  computed: {
    productosPorMostrar: function () {
      let arrMostrar = []
      if (this.indiceActive === 0) {
        arrMostrar = this.productos
      } else {
        arrMostrar = this.productos.filter((item) => {
          return item.categoria === this.menuList[this.indiceActive].categoria
        })
      }
      this.reAsignMostrarGlobal(arrMostrar)
      return arrMostrar
    }
  },
  methods: {
    sendMail: function () {
      const this_ = this
      // alert()
      const formDa = new FormData()
      const postData = { email: this.correoFormulario }
      for (const key in postData) {
        formDa.append(key, postData[key])
      }
      Axios(
        {
          url: 'mail.php',
          method: 'post',
          data: formDa
          // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token// headers: { 'X-CSRFToken': csrftoken }
        }
      )
        .then(function (response) {
          // console.log(response)
          if (response.data[0] === 'success') {
            console.log('Se ha enviado')
            this_.errors.push('Gracias por escribirnos, le responderemos lo más rápido posible.')
            document.getElementsByClassName('btn-enviar-correo')[0].innerText = 'pedir información'
          }
        })
        .catch(function (error) {
          console.log(error.response)
          console.log(error)
        })
    },
    reAsignMostrarGlobal: function (arrMostrar) {
      this.arrMostrarGlobal = arrMostrar
    },
    moverGaleria: function (index) {
      this.indiceActive = index
    },
    modal_cap: function (item, index) {
      console.log(item)
      this.urlProducto = '/images/productos/' + item.imgProducto + '.png'
      this.alt = item.nombreImagen
      this.nombreProducto = item.nombreProducto
      this.strongNombre = item.strongNombre
      this.precio = item.precio
      this.descripcion = item.descripcion
      this.idEnModal = index
      this.circle.style.backgroundColor = item.color
      this.$refs.myModalRef.show()
    },
    cerrarModal: function () {
      this.$refs.myModalRef.hide()
    },
    next: function () {
      if (this.idEnModal < this.arrMostrarGlobal.length - 1) {
        const item = this.arrMostrarGlobal[this.idEnModal + 1]
        this.urlProducto = '/images/productos/' + item.imgProducto + '.png'
        this.alt = item.nombreImagen
        this.nombreProducto = item.nombreProducto
        this.strongNombre = item.strongNombre
        this.precio = item.precio
        this.descripcion = item.descripcion
        this.circle.style.backgroundColor = item.color
        this.idEnModal += 1
      }
    },
    prev: function () {
      if (this.idEnModal > 0) {
        const item = this.arrMostrarGlobal[this.idEnModal - 1]
        this.urlProducto = '/images/productos/' + item.imgProducto + '.png'
        this.alt = item.nombreImagen
        this.nombreProducto = item.nombreProducto
        this.strongNombre = item.strongNombre
        this.precio = item.precio
        this.descripcion = item.descripcion
        this.circle.style.backgroundColor = item.color
        this.idEnModal -= 1
      }
    },
    validarForm: function (evt) {
      evt.preventDefault()
      this.errors = []
      document.getElementsByClassName('btn-enviar-correo')[0].innerText = 'Enviando...'
      console.log(this.validTel(this.correoFormulario))
      console.log(this.validEmail(this.correoFormulario))
      if (!this.correoFormulario) {
        this.errors.push('Por favor ingresa un dato')
      } if (!this.validTel(this.correoFormulario) && !this.validEmail(this.correoFormulario)) {
        this.errors.push('Ingrese un número de teléfono (sin espacios) o correo válido')
      }
      if (this.errors.length === 0) {
        this.sendMail()
        this.correoFormulario = ''
      }
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validTel: function (email) {
      const re = /^[0-9,$]*$/
      return re.test(email)
    }
  },
  mounted() {
    this.circle = document.querySelector('.circle-modal')
  }
}
</script>
<style>
</style>

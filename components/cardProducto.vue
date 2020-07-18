<template>
  <div itemscope itemtype="http://schema.org/Product"  class="cont-prod mx-2 py-4">
    <meta itemprop="name" :content="nombreProducto + ' ' + strongNombre" />
    <div itemprop="brand" itemtype="http://schema.org/Thing" itemscope>
      <meta itemprop="name" content="Capilab" />
    </div>
    <meta itemprop="mpn" :content="indice" />
    <meta itemprop="availability" content="https://schema.org/InStock" />
    <link itemprop="url" href="https://capilab.com.mx" />
    <meta itemprop="priceCurrency" content="MXN" />
    <div class="etiquetas">
      <div class="label-nuevo">Nuevo</div>
      <div v-show="descuento>0" class="label-desc">-{{descuento}}%</div>
    </div>
    <div class="cont-img">
      <img
        itemprop="image"
        :href="urlImagen"
        class="img-producto"
           :src="urlImagen"
        :alt="nombreImagen+' de Capilab'">
    </div>
    <div  class="contendedor-datalles d-flex align-items-center">
      <div itemprop="offers" itemscope itemtype="http://schema.org/Offer" class="contenido-detalles d-flex flex-wrap text-center justify-content-center">
        <span itemprop="name" class="titulo-p row my-1">{{nombreProducto}}<strong>{{strongNombre}}</strong></span>
        <p itemprop="price" :content="precio" class="precio row track-200 my-1">${{precio}}</p>
        <link itemprop="availability" href="http://schema.org/InStock" />
        <div class="controles-product mt-4">
          <div class="ver" v-on:click="abrirModal"></div>
          <a itemprop="url" href="https://capilab.com.mx" class="buy"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardProducto',
  props: {
    nombreImagen: {
      type: String,
      default: 'pinaplex'
    },
    nombreProducto: {
      type: String,
      default: 'Before the tint'
    },
    strongNombre: {
      type: String,
      default: 'Pinaplex®'
    },
    precio: {
      type: String,
      default: '19'
    },
    descuento: {
      type: Number,
      default: 0
    },
    indice: {
      type: Number,
      default: 0
    }
  },
  methods: {
    abrirModal: function () {
      this.$emit('abreModal')
    }
  },
  computed: {
    urlImagen: function () {
      return '/images/productos/' + this.nombreImagen + '.png'
    }
  }
}
</script>

<style >

</style>

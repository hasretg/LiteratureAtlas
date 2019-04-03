// register multiselect component
Vue.component('multiselect', window.VueMultiselect.default)

// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

var app = new Vue({
  el: '#app',

  data: {
    showInfo: false,
    showSideNav: false,
    map: 'startingMap',
    title: '',
    author: '',
    desc: '',
    plot: '',
    legend: {},
    mapList: [],
    selectedMap: null,
    selectedChar: []
  },
  methods: {
    // set different maps
    setMap: function (name) {
      this.map = name
      if (name !== 'startingMap' && name !== 'aboutPage') {
        this.getBookInfo(name)
      } else {
        this.showSideNav = false
      }
    },
	//redirect to ETH webpage
	goToETH: function() {
		window.location.href = "http://www.ikg.ethz.ch/en/"
	},
    // show/hide the side menu
    toggleSideNav: function () {
      this.showSideNav = !this.showSideNav
    },
    // read book info from meta files
    getBookInfo: function (name) {
      var _this = this
      fetch(_this.mapMetaURL)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        _this.handleBookInfo(data)
      })
    },
    // preprocess book info
    handleBookInfo: function (data) {
      this.title = data.book.title
      this.author = data.book.author
      this.desc = data.book.desc
      this.plot = data.book.plot
      this.mapList = data.maps
      this.legend = data.legend
    }
  },

  computed: {
    mapURL: function () {
      return 'src/' + this.map + '/index.html'
    },
    mapMetaURL: function () {
      return 'src/_json/' + this.map + '_meta.json'
    },
    hasLegend: function () {
      if (this.legend.imageURL) {
        return !(this.legend.imageURL === '')
      } else {
        return false
      }
    },
    legendURL: function () {
      return this.hasLegend ? 'src/_images/' + this.legend.imageURL : ''
    },
    sideNavWidth: function () {
      return this.showSideNav ? '20%' : '0'
    },
    iframeStyle: function () {
      if (this.showSideNav) {
        return {
          marginLeft: '20vw'
        }
      } else {
        return {
          marginLeft: '0'
        }
      }
    },
    menuBtnVisi: function () {
      if (this.map !== 'startingMap' && this.map !== 'aboutPage') {
        return 'visible'
      } else {
        return 'hidden'
      }
    },
    characterList: function () {
      if (this.selectedMap !== null) {
        return this.selectedMap.characters
      } else {
        return []
      }
    },
    hasCharacter: function () {
      return !(this.characterList.length === 0)
    },
    postData: function () {
      return {
        map: this.selectedMap,
        char: this.selectedChar
      }
    }
  },

  watch: {
    postData: function (data) {
      this.$refs.mapFrame.contentWindow.postMessage(data, '*')
    }
  }
})
import './site.scss';
import { Provider } from 'mobx-react';
import { Route } from 'react-router-dom'
import Cart from '../Cart'
import cartStore from '../Cart/store';
import Footer from '../Footer'
import Header from '../Header';
import Home from '../Home'
import homeStore from '../Home/store';
import SiteStateStore from '../Site/state-store';
import Product from '../Product'
import React, { Component } from 'react';
export default class Site extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount() {
    window.onKochavaLoaded = this.onKochavaLoaded;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `!function(a,b,c,d,e){
                          var f=window.kochava=window.kochava||[];
                          if(f.loaded)return void(window.console&&console.error&&console.error("Kochava snippet already included"));
                          f.loaded=!0,
                          f.methods=["page","identify","activity","conversion","init"],
                          stub=function(a){
                            return function(){
                              var b=Array.prototype.slice.call(arguments);
                              return b.unshift(a),f.push(b),f
                            }
                          };
                          for(var g=0;g<f.methods.length;g++){var h=f.methods[g];f[h]=stub(h)}

                          f.init((new Date).getTime(),a,e),
                          function(){
                            var a=document.createElement("script");
                            a.type="text/javascript",
                            a.onload=window.onKochavaLoaded,
                            a.src=("https:"===document.location.protocol?"https://":"http://")+"assets.kochava.com/kochava.js/"+b+"/kochava.min.js",
                            d||(a.src=a.src+"?c="+Math.random());
                            var c=document.getElementsByTagName("script")[0];
                            c.parentNode.insertBefore(a,c)
                          }(),
                          c&&f.page()
                        } ("kocraze-web-stg-dbq6rjn9","v1", true, true, true);`;
    document.head.appendChild(script);
  }
  onKochavaLoaded = () => {
    console.log('Kochava was init')
    console.log('Same kw557a7fa895aed: ', kochava.kvID == 'kw557a7fa895aed'); 
    homeStore.kochava = kochava
  }
  render() {
    const stores = {
      myStore: homeStore,
      siteState: SiteStateStore
    }

    return (
      <Provider myStore={homeStore} siteState={SiteStateStore}>
        <React.Fragment>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/product' component={Product} />
          <Provider myStore={cartStore}>
            <Route path='/product/cart/:step' component={Cart} />
          </Provider>
          <Footer />
        </React.Fragment>
      </Provider>
    );
  }
}
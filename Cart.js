class CartItem {
    constructor(code, qty) {
      this.code = code;
      this.quantity = qty;
    }
  }
  class Cart {
    constructor(userid) {
      this.userid = userid;
      this.list = [];
      this.loadCart();
    }
    storeCart() {
      var cartname = this.userid + "cart";
      var cart = "";
      if (this.list != null) {
        for (let i = 0; i < this.list.length; i++) {
          let x = this.list[i];
          cart = cart + (x.code + ":" + x.quantity + "@");
        }
      }
      if (cart != "") {
        cart = cart.substring(0, cart.length - 1);
        setCookie(cartname, cart, 1);
      } else setCookie(cartname, "", -1);
    }
    loadCart() {
      let cartname = this.userid + "cart";
      let cart = getCookie(cartname);
      if (cart != null) {
        var str = cart.split("@");
        for (var i = 0; i < str.length; i++) {
          let item = str[i].split(":");
          let v = new CartItem(item[0], item[1]);
          this.list.push(v);
        }
      }
    }
    addItem(code, qty) {
      let flag = false;
      if (this.list != null) {
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].code == code) {
            flag = true;
            this.list[i].quantity =
              parseInt(this.list[i].quantity) + parseInt(qty);
            break;
          }
        }
      }
      if (flag == false) {
        qty = parseInt(qty);
        this.list.push(new CartItem(code, qty));
      }
      this.storeCart();
    }
    getCart() {
      return this.list;
    }
    delCart() {
        var cartname = this.userid + "cart";
        setCookie(cartname, "", -1);
      }
      delItem(code) {
        let newlist = [];
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].code == code) continue;
          newlist.push(this.list[i]);
        }
        this.list = newlist;
        this.storeCart();
      }
      updateItem(code, qty) {
        let flag = false;
        if (this.list != null) {
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].code == code) {
              flag = true;
              this.list[i].quantity = parseInt(qty);
              break;
            }
          }
        }
        if (flag == false) {
          qty = parseInt(qty);
          this.list.push(new CartItem(code, qty));
        }
        this.storeCart();
      }
    }
  
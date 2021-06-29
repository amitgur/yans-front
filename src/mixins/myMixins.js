import extractResponseMessage from "assets/js/extractResponseMessage";

export default {
  methods: {
    serverError(title, e) {
      let m;
      // in case of one argument, it is the message
      if (!e) {
        e = title;
        title = null;
      }

      m = extractResponseMessage(e);

      this.$q.dialog({
        title: title ? title : "Error",
        html: true,
        message: m,
      });

      console.error(title);
      console.error(e);
      console.error(JSON.stringify(e, null, 2));
    },
    myDialog(title, e) {
      this.$q.dialog({
        title: e ? title : "Attention",
        message: e || title,
      });
    },
    showNotify(msg, pos) {
      this.$q.notify({
        message: msg,
        position: pos ? pos : "bottom",
        color: "blue-7",
      });
    },
  },
};

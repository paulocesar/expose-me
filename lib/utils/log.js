module.exports = {
    info: function (title, message) { console.log("\x1b[36mexpose.info\x1b[0m - "+title+": "+message); }
  , warn: function (title, message) { console.log("\x1b[36mexpose.warn\x1b[0m - "+title+": "+message); }
  , error: function (title, message) { console.log("\x1b[36mexpose.error\x1b[0m - "+title+": "+message); }
}
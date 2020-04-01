// import "materialize-css";
export default ({ message, color, outDuration }) => {
  M.toast({
    html: message,
    classes: color,
    outDuration: outDuration ? outDuration : 375
  });
};

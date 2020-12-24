const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.s[ac]ss$/i,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, {loader: 'sass-loader'}],
},
{
  test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
  exclude: /node_modules/,
  loader: "file-loader"
},
);

module.exports = {
  module: {
    rules: rules
  },
  plugins: plugins, 
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss'],
  }
};

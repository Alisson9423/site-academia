# collapzion.js (v 1.0)
Lightweight jQuery plugin that help to create and navigate button toggle option for your mobile or dekstop application

<img src="http://image.prntscr.com/image/af3a029bdfd340d6933e22bdddb7686a.png" id="image-img" class="image-framed" style="max-width: 1275px;">
<img src="http://image.prntscr.com/image/ea17c53bf6a34c2f882d9555e87786fc.png" id="image-img" class="image-framed" style="max-width: 1275px;">

## Getting Started

## manually
`git clone git@github.com:channasmcs/collapzion.git`

## How use collapzion.js
```javascript
jQuery(function($){
	$('#btncollapzion').Collapzion({
        _child_attribute:[
          	{
              'label':'Create new Document',
              'url':'/Create',
              'icon':'&#xE150;'
          	},
          	{
              'label':'Manage My Document',
              'url':'/manage',
              'icon':'&#xE873;'
          	},
          	{
              'label':'My Profile',
              'url':'/profile',
              'icon':'&#xE7FD;'
          	},
      	],
      	_main_btn_color:'#4285f4;',
      	_child_btn_color:'#f4645f;',
	});
});
```

```html
<div id="btncollapzion" class=" btn_collapzion"></div>
```
## Import font Icon

in this time collapzion.js use , [Google material Icon](https://material.io/icons/). you can import icon using following URl
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## License
Copyright &copy; Channa Bandara<br>
Licensed under the  GNU GENERAL PUBLIC LICENSE.
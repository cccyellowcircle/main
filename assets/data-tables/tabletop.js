var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1fll7twNbeoXECg8IqWPg7iisxN9-8qNaLi5JYp9lRIo/pubhtml';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

function showInfo(data, tabletop) {
  /*console.log(data);*/
  for (var i = 0; i < data.length; i++) {
    var text =
      '<tr>' + 
      '<td class="body-item">' +
        data[i].chiname + 
      '</td>' + 
      '<td class="body-item">' + data[i].category + '</td>' + 
      '<td class="body-item">';
    if("" != data[i].fblink) {
      text += '<a class="social-link" href="' + data[i].fblink + '" target="_blank"><i class="fa fa-facebook-square fa-lg" aria-hidden="true"></i></a>';
    }
    if("" != data[i].iglink) {
      text += '<a class="social-link" href="' + data[i].iglink + '" target="_blank"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></a>';
    }
    if("" != data[i].weblink) {
      text += '<a class="social-link" href="' + data[i].weblink + '" target="_blank"><i class="fa fa-link fa-lg" aria-hidden="true"></i></a>';
    }
    text += '</td>';
    
    if("" != data[i].weblink) {
      text += '<td class="body-item">' + '<a href="' + data[i].weblink + '">了解更多</a></td>';
    } else {
      text += '<td class="body-item">No Link</td>';
    }
    text += '</tr>';
           
    $('.brandTable').append(text);
    }
}
window.addEventListener('DOMContentLoaded', init);
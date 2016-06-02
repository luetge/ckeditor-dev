CKEDITOR.editorConfig = function (config) {
  config.toolbarGroups = [
    { name: 'document', groups: [ 'mode', 'document', 'doctools', ], },
    { name: 'clipboard', groups: [ 'clipboard', 'undo', ], },
    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing', ], },
    { name: 'forms', groups: [ 'forms', ], },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup', ], },
    { name: 'paragraph', groups: [ 'list', 'blocks', 'align', 'indent', 'bidi', 'paragraph', ], },
    { name: 'links', groups: [ 'links', ], },
    { name: 'insert', groups: [ 'insert', ], },
    { name: 'styles', groups: [ 'styles', ], },
    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
    { name: 'colors', groups: [ 'colors', ], },
    { name: 'tools', groups: [ 'tools', ], },
    { name: 'others', groups: [ 'others', ], },
    { name: 'about', groups: [ 'about', ], },
  ];

  config.format_tags = 'p;h1;h2;h3';

  config.allowedContent = 'em strong u del ul ol li i br b strike h1 h2 h3 div; a[!href]; p[align]{text-align};';
  config.skin = 'mathhire';
  config.magicline_color = '#d9534f';

  config.removeButtons = 'Superscript,Subscript,Anchor,Cut,Copy,Paste';
  config.height = '325px';
};


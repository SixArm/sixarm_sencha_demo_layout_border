// See README.md

// Load everything
Ext.require(['*']);

Ext.onReady(function() {

    Ext.create('Ext.Viewport', {

	// Use a border layout: it has areas for north, south, east, west, center.
        layout: {
            type: 'border',
	    margins: '0 0 0 0',
            padding: 0
        },

	// All the areas will use these settings unless we override them
        defaults: {
            split: true,  // Split-panel sliders beween our border areas
	    collapsible: true,  // The panel can shrink to a thin bar
	    margins: '0 0 0 0'
        },

        items: [{
	    region: 'north',
	    title: 'Header',
	    html: 'Header content here',
	    height: 100
        },{
	    region: 'west',
	    title: 'Left',
	    html: 'Left content here',
	    width: 200
        },{
	    region: 'center',
	    title: 'Center',
	    html: 'Center content here'
        },{
            region: 'east',
            title: 'Right',
	    html: 'Right sidebar content here',
            width: '33%'
        },{
            region: 'south',
	    title: 'Footer',
            html: 'Footer goes here',
            height: 100
        }]
    });
});
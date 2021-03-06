var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
 	stores: [imageStore],
	filter: {
		allow: {
			contentTypes: ['image/*']
		}
	}
});

Images.allow({
	update: function() { return true; },
	remove: function() { return true; },
	insert: function() { return true; },
	download: function() { return true; },
});

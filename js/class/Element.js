Element = function(id, thumbnail, duration, fileId, trackId, marginLeft, parent) {
    this.id = id;

    this.fileId = fileId;
    this.trackId = trackId;

    this.thumbnail = thumbnail;

    this.totalDuration = duration.total;
    this.beginDuration = duration.begin;
    this.currentDuration = this.totalDuration - this.beginDuration;

    this.width = this.calculateWidth();
    this.minWidth = 20;
    this.maxWidth = this.width;

    this.marginLeft = marginLeft;

    this.leftGap = 0;
    this.rightGap = 0;

    this.parent = parent;

    this.selected = true;
};

Element.prototype.calculateWidth = function() {
    return this.currentDuration * oneSecond;
};
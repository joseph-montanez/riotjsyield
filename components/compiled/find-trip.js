riot.tag2('find-trip', '<window id="w1" title="Trip Search" x="10" y="10" width="880px" height="480px"> <yield to="body"> <table class="table"> <thead> <tr> <th>Trip ID</th> <th>Status</th> <th>Primary Traveler</th> <th>Recv Date</th> <th>Advisor</th> <th>Rx MD</th> <th>Parent</th> </tr> </thead> <tbody> <tr each="{trips}"> <td scope="row">{id}</td> <td>{status}</td> <td>{primary_traveler}</td> <td>{recv_date}</td> <td>{advisor}</td> <td>{rx_md}</td> <td>{parent}</td> </tr> </tbody> </table> </yield> <yield to="footer"> <div class="filter-controls {hidden}"> <div class="well"> 123 </div> </div> <button type="button" class="btn btn-xs btn-link pull-left"><i class="fa fa-file"></i> New Trip</button> <button type="button" class="btn btn-xs btn-link pull-right" onclick="{toggleFilter}"><i class="fa fa-toggle-down"></i> Filter</button> <button type="button" class="btn btn-xs btn-link pull-right"><i class="fa fa-eraser"></i> Clear Filter</button> <button type="button" class="btn btn-xs btn-link pull-right"><i class="fa fa-binoculars"></i> Search</button> <button type="button" class="btn btn-xs btn-link pull-right"><i class="fa fa-folder-open"></i> Open</button> <div class="clearfix"></div> </yield> </window>', '', '', function(opts) {
		this.trips = [
			{id: 1, status: 'Open', primary_traveler: 'Mark Otto', recv_date: '3/5/2016 8:00:13 PM', advisor: 'Doctor Super MD', rx_md: 'D. Doc Doctor MD', parent: 0 }
			, {id: 2, status: 'Open', primary_traveler: 'Mark Otto', recv_date: '3/5/2016 8:00:13 PM', advisor: 'Doctor Super MD', rx_md: 'D. Doc Doctor MD', parent: 0 }
			, {id: 3, status: 'Open', primary_traveler: 'Mark Otto', recv_date: '3/5/2016 8:00:13 PM', advisor: 'Doctor Super MD', rx_md: 'D. Doc Doctor MD', parent: 0 }
			, {id: 4, status: 'Open', primary_traveler: 'Mark Otto', recv_date: '3/5/2016 8:00:13 PM', advisor: 'Doctor Super MD', rx_md: 'D. Doc Doctor MD', parent: 0 }
			, {id: 5, status: 'Open', primary_traveler: 'Mark Otto', recv_date: '3/5/2016 8:00:13 PM', advisor: 'Doctor Super MD', rx_md: 'D. Doc Doctor MD', parent: 0 }
			, {id: 6, status: 'Open', primary_traveler: 'Mark Otto', recv_date: '3/5/2016 8:00:13 PM', advisor: 'Doctor Super MD', rx_md: 'D. Doc Doctor MD', parent: 0 }
			, {id: 7, status: 'Open', primary_traveler: 'Mark Otto', recv_date: '3/5/2016 8:00:13 PM', advisor: 'Doctor Super MD', rx_md: 'D. Doc Doctor MD', parent: 0 }
			, {id: 8, status: 'Open', primary_traveler: 'Mark Otto', recv_date: '3/5/2016 8:00:13 PM', advisor: 'Doctor Super MD', rx_md: 'D. Doc Doctor MD', parent: 0 }
			, {id: 9, status: 'Open', primary_traveler: 'Mark Otto', recv_date: '3/5/2016 8:00:13 PM', advisor: 'Doctor Super MD', rx_md: 'D. Doc Doctor MD', parent: 0 }
		];
		this.hidden = false;
		this.toggleFilter = function (e) {
			this.hidden = true;
			this.update();
		}
});
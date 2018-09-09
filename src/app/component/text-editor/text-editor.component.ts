import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TextEditorComponent implements OnInit {

	public title : string = "Title"
	public body : string ="Body";
	public editMode : boolean = false;
	public Content="content content content too much content this that all that";
	public myStyle;
  constructor() { }

  ngOnInit() {
  this.Content = document.getElementById('editableContent').innerHTML;
  console.log(this.Content);
  }

  addLink(){
	        if (document.queryCommandState) {
	            if (document.queryCommandState('createLink')) {
	                document.execCommand('createLink', false, null);
	                return;
	            }

	        }
	        var linkURL, selection;
	        linkURL = prompt('Enter a URL:', 'http://');
	        selection = document.getSelection();
	        document.execCommand('createLink', true, linkURL);
	         }

	    	    
        
	    editContent()
	    {
	        this.editMode = !this.editMode;
	        if (!this.editMode) {
	        this.myStyle = null;

	        document.getElementById('editableContent').innerHTML = this.Content;

	        }
	        else {
	        	this.Content = document.getElementById('editableContent').innerHTML;
	            this.myStyle = {  'border-top': '3px solid #003788', 'box-shadow': '0 2px 10px rgba(0,0,0,0.8)'};
	        }
	    }


	    changeSelectedState(command,value)
	    {
	        if (this.selectionIsInState(command)) {
	            // $scope.replaceSelectionWithHtml('</b>' + html + '<b>');
	            document.execCommand(command, false, value);
	        }
	        else {
	            // $scope.replaceSelectionWithHtml('<b>' + html + '</b>');
	            document.execCommand(command,true,value);
	        }

	    }

	    selectionIsInState(command) {
	        var isInState = false;
	        if (document.queryCommandState) {
	            isInState = document.queryCommandState(command);

	        }
	        return isInState;
	    }

	    saveContent() {
	        //alert('hi');
	        this.Content = document.getElementById("editableContent").innerHTML;
	        //alert(content);
	        }

	    onHeading1Click() {
	        document.execCommand('formatBlock', false, '<h1>');
	    }
	    onHeading2Click() {
	        document.execCommand('formatBlock', false, '<h2>');
	    }

}

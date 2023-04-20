({
	acao : function(component, event, helper) {
        alert("Lead criado com sucesso");
        
		$A.get('e.force:refreshView').fire();
		
	}
})
import './Start.html';
import './Start.css';

Template.Start.events({
  'click .create-account'(event, instance) {
    event.preventDefault();
    FlowRouter.go('/createaccount')
  }
});

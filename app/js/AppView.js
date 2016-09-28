var app = app || {};

app.AppView = Backbone.View.extend({

    el: '#portfolio',
    
    template: templates.get('portfolio'),
    
    data: [{
        className: 'first',
        project: 'First project',
        firstCategory: 'Category1',
        secondCategory: 'Category2',
        link: 'http://google.com'
        },
        {
            className: 'second',
            project: 'Second project',
            firstCategory: 'Category1',
            secondCategory: 'Category2',
            link: 'http://gmail.com'
        },
        {
            className: 'third',
            project: 'Third project',
            firstCategory: 'Category1',
            secondCategory: 'Category2',
            link: 'http://ejs.co/'
        },
        {
            className: 'fourth',
            project: 'Fourth project',
            firstCategory: 'Category1',
            secondCategory: 'Category2',
            link: 'http://localhost:3000/'
        }],
    
    initialize: function(){
        console.log('1');
        this.render();
    },

    prepareTemplate: function(){
        var template = _.each(this.data, function(){
            template += this.template(data[i]);
        });
        console.log(template);
        return template;
    },

    render: function(){
        console.log('2');
        this.$el.html(this.prepareTemplate());
    }

});
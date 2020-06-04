// import { Handlebars } from 'https://deno.land/x/handlebars/mod.ts';


// const handle = new Handlebars();

export function indexView(context: any) {
  context.render('index', {
    data: {
      title: 'test'
    }
  })
}
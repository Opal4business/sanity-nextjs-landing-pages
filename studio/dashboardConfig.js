export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6217ff04f69b5c007dbfc427',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-44bo833s',
                  apiId: 'db0f93ec-1a61-4398-9481-890f7c450204'
                },
                {
                  buildHookId: '6217ff057d881b00afcde9f9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qadgjmf9',
                  apiId: 'be0609e9-26b1-4896-becc-5c60c002d18f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Opal4business/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qadgjmf9.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

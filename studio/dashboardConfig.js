export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fdb0a89c2e5bf8c0c95ed7b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qqag9jch',
                  apiId: '91837cdc-8c66-474a-b298-5ae5c8edc0d0'
                },
                {
                  buildHookId: '5fdb0a892c73588760e69020',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ynoe4huc',
                  apiId: 'dd6350dc-1338-473b-b63a-93f960eeaf0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/puck3000/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ynoe4huc.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

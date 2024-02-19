import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { searchPlugin } from '@vuepress/plugin-search';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { path } from '@vuepress/utils';
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';
import taskCheckbox from 'markdown-it-task-checkbox';
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: 'ru-RU',
  title: 'nng',
  description: 'Вся информация о nng',
  head: [
    [ 'link', { rel: 'icon', href: '/assets/images/logo.svg', type: 'image/svg+xml' } ]
  ],
  theme: defaultTheme({
    repo: 'MrAlonas', // я знаю что так нельзя, но всё равно паблик репа пока не будет
    contributors: false,
    notFound: [ 'Возможно, Вы ошиблись ссылкой или эта страница была удалена/перемещена.' ],
    backToHome: 'Вернуться на главную →',
    logo: '/assets/images/logo.svg',
    logoDark: '/assets/images/logo-dark.svg',
    lastUpdated: false,
    editLink: false,
    navbar: [
      { text: '💁‍♂️ ЧАВО', link: '/faq/', },
      { text: '⚖️ Правила', link: '/rules/', },
      { text: '📝 Списки', children: [ { text: '👥 Группы', link: '/lists/clubs/' }, { text: '⚖️ Заблокированные', link: '/lists/bnnd/' }, { text: '🤗 Спасибо', link: '/lists/thx/' } ] },
      { text: '👨‍💼 Админам', children: [ { text: '🎨 Оформление', link: '/admins/style/' }, { text: '⚙️ Скрипты', link: '/admins/scripts/' }, { text: '🙋‍♂️ Система подбора', link: '/admins/matching/' }, { text: '🗄 API', link: '/admins/api/' }, { text: '✅ Чек-листы', link: '/admins/checklists/' }, { text: '🐁 Условия использования', link: '/admins/copy/' } ] },
      { text: 'ВКонтакте', link: 'https://vk.com/mralonas' }
    ],
    sidebar: {
      '/lists/': [ { text: '📝 Списки', children: [ 'clubs', 'bnnd', 'thx' ] } ],
      '/admins/': [ { text: '👨‍💼 Админам', children: [ 'style', 'scripts', 'api', 'matching', 'checklists', 'copy' ] } ]
    }
  }),
  extendsMarkdown: (md) => {
    md.use(taskCheckbox, { disabled: false });
  },
  plugins: [
    searchPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    sitemapPlugin({
      hostname: 'https://nng.alonas.ml'
    }),
    docsearchPlugin({
      appId: 'H9YMJTBN61',
      apiKey: 'db97afee85dc0e75cc8218a904d96c65',
      indexName: 'nng-alonas',
      locales: {
        '/': {
          placeholder: 'Введите фразу для поиска',
          translations: {
            button: {
              buttonText: 'Поиск',
              buttonAriaLabel: 'Поиск'
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'Очистить',
                resetButtonAriaLabel: 'Очистить',
                cancelButtonText: 'Отменить',
                cancelButtonAriaLabel: 'Отменить'
              },
              startScreen: {
                recentSearchesTitle: 'Недавнее',
                noRecentSearchesText: 'Нет истории поиска',
                saveRecentSearchButtonTitle: 'Сохранить поисковый запрос',
                removeRecentSearchButtonTitle: 'Удалить запись из историю',
                favoriteSearchesTitle: 'Избранное',
                removeFavoriteSearchButtonTitle: 'Удалить запись из избранное'
              },
              errorScreen: {
                titleText: 'Невозможно загрузить результаты поиска',
                helpText: 'Проверьте подключение к интернету.'
              },
              footer: {
                selectText: 'выбрать',
                selectKeyAriaLabel: 'Клавиша Enter',
                navigateText: 'навигация',
                navigateUpKeyAriaLabel: 'Клавиша стрелка вверх',
                navigateDownKeyAriaLabel: 'Клавиша стрелка вниз',
                closeText: 'закрыть',
                closeKeyAriaLabel: 'Клавиша Escape',
                searchByText: 'Поиск от'
              },
              noResultsScreen: {
                noResultsText: 'Нет результатов по запросу',
                suggestedQueryText: 'Попробуйте',
                reportMissingResultsText: 'Нет подходящего результата поиска?',
                reportMissingResultsLinkText: 'Сообщите нам.'
              }
            }
          }
        }
      }
    })
  ]
})

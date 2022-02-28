import { TechItem } from '../types/types'

import AirflowIcon from '../img/techs/airflow.svg'
import AngularIcon from '../img/techs/angular.svg'
import BashIcon from '../img/techs/bash.svg'
import BootstrapIcon from '../img/techs/bootstrap.svg'
import DockerIcon from '../img/techs/docker.svg'
import EleventyIcon from '../img/techs/11ty.svg'
import FirebaseIcon from '../img/techs/firebase.svg'
import FoursquareIcon from '../img/techs/foursquare.svg'
import FreefemIcon from '../img/techs/ff.svg'
import GatsbyIcon from '../img/techs/gatsby.svg'
import GitIcon from '../img/techs/git.svg'
import GitkrakenIcon from '../img/techs/gitkraken.svg'
import GooglenodejsIcon from '../img/techs/google-nodejs-api.svg'
import GraphqlIcon from '../img/techs/graphql.svg'
import GrpcIcon from '../img/techs/grpc.svg'
import HerokuIcon from '../img/techs/heroku.svg'
import HtmlIcon from '../img/techs/html.svg'
import JekyllIcon from '../img/techs/jekyll.svg'
import JestIcon from '../img/techs/jestjs.svg'
import JsIcon from '../img/techs/js.svg'
import JupyterIcon from '../img/techs/jupyter.svg'
import LatexIcon from '../img/techs/latex.svg'
import LinuxIcon from '../img/techs/linux.svg'
import LiquidIcon from '../img/techs/liquid.svg'
import MatlabIcon from '../img/techs/matlab.svg'
import MongoIcon from '../img/techs/mongodb.svg'
import MysqlIcon from '../img/techs/mysql.svg'
import NestjsIcon from '../img/techs/nestjs.svg'
import NodejsIcon from '../img/techs/node.svg'
import NunjucksIcon from '../img/techs/nunjucks.svg'
import PhpIcon from '../img/techs/php.svg'
import PostmanIcon from '../img/techs/postman.svg'
import PythonIcon from '../img/techs/python.svg'
import PytorchIcon from '../img/techs/pytorch.svg'
import RIcon from '../img/techs/r.svg'
import ReactIcon from '../img/techs/react.svg'
import RubyIcon from '../img/techs/ruby.svg'
import RxjsIcon from '../img/techs/rxjs.svg'
import ScikitlearnIcon from '../img/techs/scikit-learn.svg'
import ScssIcon from '../img/techs/sass.svg'
import SphinxIcon from '../img/techs/sphinx.svg'
import TensorflowIcon from '../img/techs/tf.svg'
import TypescriptIcon from '../img/techs/ts.svg'
import TailwindIcon from '../img/techs/tailwindcss.svg'
import VscodeIcon from '../img/techs/vscode.svg'
import WordpressIcon from '../img/techs/wordpress.svg'

const techs: TechItem[] = [
  {
    id: 'airflow',
    name: 'Airflow',
    icon: AirflowIcon,
    url: 'https://airflow.apache.org/',
  },
  {
    id: 'angular',
    name: 'Angular',
    icon: AngularIcon,
    url: 'https://angular.io/',
  },
  {
    id: 'bash',
    name: 'GNU Bash',
    icon: BashIcon,
    url: 'https://www.gnu.org/software/bash/',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    icon: BootstrapIcon,
    url: 'https://getbootstrap.com/',
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: DockerIcon,
    url: 'https://www.docker.com/',
  },
  {
    id: 'eleventy',
    name: 'Eleventy',
    icon: EleventyIcon,
    url: 'https://www.11ty.dev/',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    icon: FirebaseIcon,
    url: 'https://firebase.google.com/',
  },
  {
    id: 'foursquare-api',
    name: 'Foursquare API',
    icon: FoursquareIcon,
    url: 'https://developer.foursquare.com/',
  },
  {
    id: 'freefempp',
    name: 'FreeFEM++',
    icon: FreefemIcon,
    url: 'http://www3.freefem.org/',
    imgClass: 'dark:invert',
  },
  {
    id: 'gatsby',
    name: 'GatsbyJS',
    icon: GatsbyIcon,
    url: 'https://www.gatsbyjs.com/',
  },
  {
    id: 'git',
    name: 'Git',
    icon: GitIcon,
    url: 'https://git-scm.com/',
  },
  {
    id: 'gitkraken',
    name: 'GitKraken',
    icon: GitkrakenIcon,
    url: 'https://www.gitkraken.com/',
  },
  {
    id: 'google-nodejs-api',
    name: 'NodeJS API',
    icon: GooglenodejsIcon,
    url: 'https://github.com/googleapis/google-api-nodejs-client',
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    icon: GraphqlIcon,
    url: 'https://graphql.org/',
  },
  {
    id: 'grpc',
    name: 'gRPC',
    icon: GrpcIcon,
    url: 'https://grpc.io/',
  },
  {
    id: 'heroku',
    name: 'Heroku',
    icon: HerokuIcon,
    url: 'https://www.heroku.com/',
  },
  {
    id: 'html5',
    name: 'HTML5',
    icon: HtmlIcon,
    url: 'https://html.com/html5/',
  },
  {
    id: 'jekyll',
    name: 'Jekyll',
    icon: JekyllIcon,
    url: 'https://jekyllrb.com/',
  },
  {
    id: 'jestjs',
    name: 'JestJS',
    icon: JestIcon,
    url: 'https://jestjs.io/',
  },
  {
    id: 'js',
    name: 'JavaScript',
    icon: JsIcon,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: 'jupyter',
    name: 'Jupyter',
    icon: JupyterIcon,
    url: 'https://jupyter.org/',
  },
  {
    id: 'latex',
    name: 'LaTeX',
    icon: LatexIcon,
    url: 'https://www.latex-project.org/',
    imgClass: 'dark:invert',
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: LinuxIcon,
    url: 'https://www.linux.org/',
  },
  {
    id: 'liquid',
    name: 'Liquid',
    icon: LiquidIcon,
    url: 'https://shopify.github.io/liquid/',
  },
  {
    id: 'matlab',
    name: 'Matlab',
    icon: MatlabIcon,
    url: 'https://www.mathworks.com/discovery/what-is-matlab.html',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: MongoIcon,
    url: 'https://www.mongodb.com/',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: MysqlIcon,
    url: 'https://www.mysql.com/',
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    icon: NestjsIcon,
    url: 'https://nestjs.com/',
  },
  {
    id: 'nodejs',
    name: 'NodeJS',
    icon: NodejsIcon,
    url: 'https://nodejs.org/',
  },
  {
    id: 'nunjucks',
    name: 'Nunjucks',
    icon: NunjucksIcon,
    url: 'https://mozilla.github.io/nunjucks/',
  },
  {
    id: 'php',
    name: 'PHP',
    icon: PhpIcon,
    url: 'https://www.php.net/',
  },
  {
    id: 'postman',
    name: 'Postman',
    icon: PostmanIcon,
    url: 'https://www.getpostman.com/',
  },
  {
    id: 'python',
    name: 'Python',
    icon: PythonIcon,
    url: 'https://www.python.org/',
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    icon: PytorchIcon,
    url: 'https://pytorch.org/',
  },
  {
    id: 'r-lang',
    name: 'R Lang',
    icon: RIcon,
    url: 'https://www.r-project.org/',
  },
  {
    id: 'react',
    name: 'React',
    icon: ReactIcon,
    url: 'https://reactjs.org/',
  },
  {
    id: 'ruby',
    name: 'Ruby',
    icon: RubyIcon,
    url: 'https://www.ruby-lang.org/',
  },
  {
    id: 'rxjs',
    name: 'RxJS',
    icon: RxjsIcon,
    url: 'https://rxjs.dev/',
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    icon: ScikitlearnIcon,
    url: 'https://scikit-learn.org/',
  },
  {
    id: 'scss',
    name: 'SCSS',
    icon: ScssIcon,
    url: 'https://sass-lang.com/',
  },
  {
    id: 'sphinx',
    name: 'Sphinx Doc',
    icon: SphinxIcon,
    url: 'https://www.sphinx-doc.org/',
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    icon: TensorflowIcon,
    url: 'https://www.tensorflow.org/',
  },
  {
    id: 'ts',
    name: 'TypeScript',
    icon: TypescriptIcon,
    url: 'https://www.typescriptlang.org/',
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind',
    icon: TailwindIcon,
    url: 'https://tailwindcss.com/',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    icon: VscodeIcon,
    url: 'https://code.visualstudio.com/',
  },
  {
    id: 'wordpress',
    name: 'Wordpress',
    icon: WordpressIcon,
    url: 'https://wordpress.org/',
  },
]

export default techs

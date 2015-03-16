var React = require('react'),
    jshint = require('jshint').JSHINT,
    CodeMirror = require('react-code-mirror');

var Editor = React.createClass({

  propTypes: {
    value: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      value: 'console.log(\'awesome\')'
    };
  },

  getInitialState: function() {
    return {
      CodeMirrorValue: ''
    };
  },

  render: function() {
    var options = {
      lineNumbers: true,
      mode: 'javascript',
      theme: 'monokai',
      runnable: true,
      lint: true,
      linter: jshint,
      value: this.state.CodeMirrorValue,
      matchBrackets: true,
      autoCloseBrackets: true,
      scrollbarStyle: 'null',
      lineWrapping: true,
      gutters: ['CodeMirror-lint-markers'],
      onChange: e => {
        this.setState({ CodeMirrorValue: e.target.value});
      }
    };

    var config = {
      setSize: ['100%', 'auto'],
      extraKeys: {
        Tab: function() {
          console.log('tab');
          return false;
        },
        'Ctrl-Enter': function() {
          console.log('ctrl enter');
          return false;
        }
      }
    };

    return (
      <div id='mainEditorPanel'>
        <form className='code'>
          <div className='form-group codeMirrorView'>
            <CodeMirror
              config={ config }
              { ...options }/>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = Editor;
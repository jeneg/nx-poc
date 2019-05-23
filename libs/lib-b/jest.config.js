module.exports = {
  name: 'lib-b',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lib-b',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

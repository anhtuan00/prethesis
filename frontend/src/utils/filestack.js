const client = filestack.init('ASADTyBVCQBBtQ05dBigAz');
client
  .picker({
    accept: ['application/pdf'],
    fromSources: ['local_file_system'],
    onUploadDone: (file) => {
      // If you throw any error in this function it will reject the file selection.
      // The error message will be displayed to the user as an alert.
      console.log(file);
    },
  })
  .open();

const file = {
  filesUploaded: [
    {
      filename: 'sample.pdf',
      handle: 'pBWP50TTKezQwMfR11XA',
      mimetype: 'application/pdf',
      originalPath: 'sample.pdf',
      size: 3028,
      source: 'local_file_system',
      url: 'https://cdn.filestackcontent.com/pBWP50TTKezQwMfR11XA',
      uploadId: '1VRt5HJpYSZLKkga',
      originalFile: {
        name: 'sample.pdf',
        type: 'application/pdf',
        size: 3028,
      },
      status: 'Stored',
    },
  ],
  filesFailed: [],
};

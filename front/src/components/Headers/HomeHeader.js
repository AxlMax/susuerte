import { Container} from 'reactstrap';
import UploadFiles from 'components/fileUploader/fileUploader';

const HomeHeader = () => {
  
  return (
    <>
      <div className="header bg-gradient-info pb-3 pt-5 pt-md-8">
        <Container fluid>
          <div>
            <UploadFiles/>
          </div>
            
        </Container>
      </div>

      {/** modal components */}


    </>
  );
};

export default HomeHeader;


//OneDrive Item Interface
export interface IOneDriveItem {
    endpoint?: string, // the endpoint url the item was fetched from
    driveId?: string, // the identifier of the drive that contains the item
    itemId?: string   // the identifier of the item
}

//OneDrive Item Class
/*export class OneDriveItem implements IOneDriveItem {
    endpoint?: string;
    driveId?: string;
    itemId?: string;
}*/